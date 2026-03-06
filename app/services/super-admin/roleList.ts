"use server";

import { getSessionId } from "./companyList";

export const getRoleList = async () => {
    const sessionId = await getSessionId();

    if (sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/super-user/role/list", {
                method: "POST",
                headers: {
                    "X-Session-ID": sessionId,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    filters: [],
                }),
            });

            const result = await response.json();
            return result?.roles;
        } catch (error) {
            console.log("error: ", error);
        }
    }
};

export const getRole = async (id: number) => {
    const sessionId = await getSessionId();

    if (sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/super-user/role/get/" + id, {
                method: "GET",
                headers: {
                    "X-Session-ID": sessionId,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.log("error: ", error);
        }
    }
};

export const createRole = async function (prevState: null, formData: any) {
    const sessionId = await getSessionId();

    if (sessionId) {
        console.log("data to be posted: ", formData);
        return {
            success: true,
            error: "",
            data: "",
        };
        // try {
        //     const response = await fetch("role url", {
        //         method: "POST",
        //         headers: {
        //             "X-Session-ID": sessionId,
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             formData,
        //         }),
        //     });

        //     const result = await response.json();

        //     if (result.has_error) {
        //         return {
        //             success: false,
        //             error: "Unable to create User",
        //             data: "",
        //         };
        //     }
        //     console.log(result);
        //     return {
        //         success: true,
        //         error: "",
        //         data: result.user_id,
        //     };
        // } catch (error) {
        //     console.log("error: ", error);
        //     return {
        //         success: false,
        //         error: "Failed to connect to the server",
        //         data: "",
        //     };
        // }
    }
};

export const updateRole = async (id: number, prevState:any, data: any) => {
    const sessionId = await getSessionId();

    if (sessionId) {
        console.log("data to be posted: ", data);

        // try {
        //     const response = await fetch("https://tagxl.com/api/super-user/role/update/" + id, {
        //         method: "PUT",
        //         headers: {
        //             "X-Session-ID": sessionId,
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             role_name: data.name,
        //             description: data.description || null,
        //             permission: data.permissions,
        //         }),
        //     });
        //     console.log("update action called");

        //     const result = await response.json();

        //     if (result.has_error) {
        //         console.log(result);
        //         return {
        //             success: false,
        //             error: "Unable to Update User",
        //             data: "",
        //         };
        //     }
        //     console.log(result);
        //     return {
        //         success: true,
        //         error: "",
        //         data: result.user_id,
        //     };
        // } catch (error) {
        //     console.log("error: ", error);
        //     return {
        //         success: false,
        //         error: "Failed to connect to the server",
        //         data: "",
        //     };
        // }
    }
};
