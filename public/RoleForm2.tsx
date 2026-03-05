"use client";

import { useInsertionEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { permissionGroups } from "@/lib/permissions";

export const permissionGroups = [
    {
        name: "Manage User",
        key: "user",
        actions: ["list", "create", "update", "delete"],
    },
    {
        name: "Manage Role",
        key: "role",
        actions: ["list", "create", "update", "delete"],
    },
    {
        name: "Manage Company",
        key: "company",
        actions: ["list", "create", "update", "delete", "login-to-company"],
    },
];

// const permissionGroupsTemp = [
//     { user: ["list", "create", "update", "delete"] },
//     { role: ["list", "create", "update", "delete"] },
//     { company: ["list", "create", "update", "delete", "login-to-company"] },
// ];

type FormValues = {
    name: string;
    permissions: Record<string, boolean>;
};

type KeyPermission = {
    [key: string]: string[];
};

export default function RoleForm() {
    const { register, handleSubmit, watch, setValue } = useForm<FormValues>();
    const permissionstemp = watch("permissions") || {};

    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    // const [expanded, setExpanded] = useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [userPermission, setUserPermission] = useState<KeyPermission>({ user: [] });
    const [rolePermission, setRolePermission] = useState<KeyPermission>({ role: [] });
    const [companyPermission, setCompanyPermission] = useState<KeyPermission>({ company: [] });

    const [permissions, setPermissions] = useState({"user": [], "role": [], "company": []});

    const toggleExpand = (key: string) => {
        setExpanded((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const toggleGroup = (groupKey: string, actions: string[], checked: boolean) => {
        actions.forEach((action) => {
            setValue(`permissions.${groupKey}_${action}`, checked);
        });
    };

    const isGroupChecked = (groupKey: string, actions: string[]) => {
        return actions.every((action) => permissions[`${groupKey}_${action}`]);
    };

    const isGroupIndeterminate = (groupKey: string, actions: string[]) => {
        const checkedCount = actions.filter((a) => permissions[`${groupKey}_${a}`]).length;

        return checkedCount > 0 && checkedCount < actions.length;
    };

    // const onSubmit = (data: FormValues) => {
    //     console.log(data);
    // };

    function groupSelectAll(key: string) {
      if(key === 'user') {
        permissionGroups.map((p) => {
          
        })
        setUserPermission({user: })
      }
      // permissionGroups.map((item) => {
      //   if(item.key == key) {
      //       permissions.`${key}`.push(...item.actions)
      //   }
      // })
    }

    function onSubmit (e: any) {
      e.preventDefault()
      console.log(permissions)
    }

    return (
        <div className='bg-white rounded-xl shadow p-6'>
            <h2 className='text-xl font-semibold mb-6'>Add Role</h2>
            <form action='' className='space-y-6' onSubmit={onSubmit}>
                {/*Role Name  */}
                <div>
                    <label className='font-medium'>
                        Name <span className='text-red-500'>*</span>
                    </label>

                    <input
                        // {...register("name", { required: true })}
                        className='w-full border rounded-md px-3 py-2 mt-2'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                {/* permissions */}
                <div>
                    <h3 className='font-semibold mb-4'>Select Permissions</h3>

                    <div className='space-y-4'>
                        {permissionGroups.map((item) => {
                            return (
                                <div className='border rounded-md p-4'>
                                    <div className='flex items-center gap-3'>
                                        {/* Expand Button */}
                                        <button
                                            type='button'
                                            className='text-red-500 font-bold'
                                            onClick={() => toggleExpand(item.key)}>
                                            {expanded[item.key] ? "-" : "+"}
                                        </button>

                                        {/* Parent Checkbox */}
                                        <input type='checkbox' onClick={() => groupSelectAll(item.key)}/>

                                        <span className='font-medium'>{item.name}</span>
                                    </div>

                                    {expanded[item.key] && (
                                        <div className='grid grid-cols-4 gap-6 mt-4 ml-6'>
                                            {" "}
                                            {item.actions.map((p) => {
                                                return (
                                                    <label className='flex items-center gap-2' key={p}>
                                                        <input type='checkbox' /> {p}
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Buttons */}
                <div className='flex justify-end gap-3'>
                    <button type='button' className='border px-4 py-2 rounded-md'>
                        Back
                    </button>

                    <button type='submit' className='bg-green-600 text-white px-4 py-2 rounded-md'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}
