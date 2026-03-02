"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const login = async function (prevState: any, formData: FormData) {
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("login action called");

    try {
        const response = await fetch("https://tagxl.com/api/super-user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const result = await response.json();

        if (result.has_error) {
            return {
                success: false,
                error: "Incorrect email or password",
            };
        }
        console.log(result);

        const cookieStore = await cookies();
        cookieStore.set("user-session", result.sid, {
            httpOnly: true, 
            secure: false,
            maxAge: 60 * 60 * 24 * 7, 
            path: "/", 
        });

        return {
            success: true,
            error: "",
        };

    } catch (error) {
        return {
            success: false,
            error: "Failed to connect to the server",
        };
    }
};
