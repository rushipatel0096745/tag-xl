"use server";

interface filter {
    field?: string;
    condition: string;
    text?: string;
}

import { getBySessionName } from "@/app/utils/helper";

export const getCompanyList = async function (page: number, filters: filter[]) {
    const sessionId = await getBySessionName("user-session");

    if (sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/super-user/company/list", {
                method: "POST",
                headers: {
                    "X-Session-ID": sessionId,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page: page,
                    pageSize: 10,
                    filters: filters,
                }),
            });

            const result = await response.json();
            return result?.companies;
        } catch (error) {
            console.log("error: ", error);
        }
    }
};

export const getCompanyColumns = async () => {
    const sessionId = await getBySessionName("user-session");

    if (sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/super-user/table-columns/company_list", {
                method: "GET",
                headers: {
                    "X-Session-ID": sessionId,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            const columns = result?.columns;
            const conditions = result?.conditions;
            // console.log(columns, conditions)
            return [columns, conditions];
        } catch (error) {
            console.log("error: ", error);
        }
    }
};
