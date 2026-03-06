"use client";

import { useForm } from "react-hook-form";
import { startTransition, useActionState, useEffect, useState } from "react";

type PermissionMap = {
    [key: string]: string[];
};

interface RoleFormValues {
    role_name: string;
    description?: string | null;
    permission: PermissionMap;
}

interface ActionResponse {
    success: boolean;
    error?: string;
    data?: string | number;
}

interface Props {
    defaultValues?: RoleFormValues;
    // onSubmit: (data: RoleFormValues) => void;
    action: (data: RoleFormValues) => ActionResponse;
    loading?: boolean;
    roleId?: number | string;
}

const PERMISSIONS = {
    user: ["list", "create", "update", "delete"],
    role: ["list", "create", "update", "delete"],
    company: ["list", "create", "update", "delete", "login_to_company"],
};

export default function RoleForm({ defaultValues, action, loading, roleId }: Props) {
    const { register, handleSubmit, setValue, reset, watch } = useForm<RoleFormValues>({
        defaultValues: {
            role_name: defaultValues?.role_name ?? "",
            description: defaultValues?.description ?? "",
            permission: defaultValues?.permission ?? {},
        },
    });

    const [showMsg, setShowMsg] = useState<string>("");

    const [state, formAction, isPending] = useActionState(roleId ? action.bind(null, roleId) : action, {
        success: null,
        error: "",
        data: "",
    });

    useEffect(() => {
        console.log(roleId);
        if (defaultValues) {
            reset(defaultValues);
        }
    }, [defaultValues, reset]);

    const permissionWatch = watch("permission");

    const togglePermission = (module: string, action: string) => {
        const current = permissionWatch?.[module] || [];

        if (current.includes(action)) {
            setValue(
                `permission.${module}`,
                current.filter((p) => p !== action)
            );
        } else {
            setValue(`permission.${module}`, [...current, action]);
        }
    };

    const isChecked = (module: string, action: string) => {
        return permissionWatch?.[module]?.includes(action) ?? false;
    };

    const onSubmit = async (data: RoleFormValues) => {
        startTransition(() => formAction(data));
        if (!roleId) {
            reset();
            setShowMsg("Role created successfully");
        } else {
            setShowMsg("Role updated successfully");
        }
    };

    const handleFormSubmit = (data: RoleFormValues) => {
        console.log("Form submitted with values:", data);
        // onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 bg-white p-6 rounded-lg shadow'>
            {/* Role Name */}

            {state?.error && (
                <div className='text-red-500'>
                    <p>{state?.error}</p>
                </div>
            )}

            {showMsg && (
                <div className='text-green-700'>
                    <p>{showMsg}</p>
                </div>
            )}

            <div>
                <label className='font-medium'>Name*</label>

                <input
                    {...register("role_name", { required: "Role name is required" })}
                    className='w-full border rounded px-3 py-2 mt-2'
                />
            </div>

            {/* Permissions */}

            <div>
                <div className='font-medium mb-4'>Select Permissions</div>

                {Object.entries(PERMISSIONS).map(([module, actions]) => (
                    <div key={module} className='mb-6'>
                        <div className='font-semibold capitalize mb-2'>Manage {module}</div>

                        <div className='flex flex-wrap gap-6'>
                            {actions.map((action) => (
                                <label key={action} className='flex items-center gap-2'>
                                    <input
                                        type='checkbox'
                                        checked={isChecked(module, action)}
                                        onChange={() => togglePermission(module, action)}
                                    />

                                    {action}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Submit */}

            <button type='submit' disabled={loading} className='bg-green-600 text-white px-6 py-2 rounded'>
                {loading ? "Saving..." : "Save"}
            </button>
        </form>
    );
}
