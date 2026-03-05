import { getRole, updateRole } from "@/app/services/super-admin/roleList";
import RoleForm from "@/app/super-admin/components/RoleEditForm";
import RoleFormEdit from "@/app/super-admin/components/RoleEditForm";
import React from "react";

export interface RoleResponse {
    has_error: boolean;
    message: string;
    role: Role;
}

type RoleFormData = {
    name: string;
    description: string;
    permissions: Record<string, string[]>; // e.g. { user: ["list", "create"] }
};

export interface Role {
    id: number;
    role_name: string;
    description: any;
    permission: Permission;
}

export interface Permission {
    role: string[];
    user: string[];
    company: string[];
}

const RoleEdit = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    const role = await getRole(Number(id));

    const defaultValues: RoleFormData = {
        name: role.role_name,
        description: role.description ?? "",
        permissions: role.permission, 
    };

    // return <UserEditForm userData={user} id={Number(id)} />;
    return (
        <div className='max-w-2xl mx-auto py-8 px-4'>
            <div className='bg-white rounded-xl shadow p-6'>
                <h1 className='text-xl font-semibold mb-6'>Edit Role</h1>
                <RoleForm defaultValues={defaultValues} onSubmit={updateRole.bind(null, Number(id))} />
            </div>
        </div>
    );
};

export default RoleEdit;
