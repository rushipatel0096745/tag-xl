import React from "react";
import CompanyLogin from "../components/CompanyLogin";
import { encryptData } from "@/app/utils/encryption";
import { cookies } from "next/headers";

type LoginResponse = {
    success: boolean;
    error: string | null;
};

async function login(prevState: any, formData: FormData): Promise<LoginResponse> {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");
    const companyId = formData.get("companyId");

    console.log("company login action called");

    try {
        const response = await fetch("https://tagxl.com/api/company/company-login", {
            method: "POST",
            headers: {
                "X-Company-ID": companyId,
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

        const encryptedData = encryptData(result);

        const cookieStore = await cookies();
        cookieStore.set("company-user-session", encryptedData, {
            httpOnly: false,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 7,
            path: "/",
        });

        return {
            success: true,
            error: "",
        };
    } catch (error) {
        console.log("error message: ", error);
        return {
            success: false,
            error: "Failed to connect to the server",
        };
    }
}

const CompanyLoginPage = () => {
    return (
        <div>
            <CompanyLogin loginAction={login} />
        </div>
    );
};

export default CompanyLoginPage;
