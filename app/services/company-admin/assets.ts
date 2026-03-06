"use server";

import { getComapnyData, getCompanySessionId } from "./getComapnyData";

export const getAssetList = async function (page: number = 1, filters: any[] = []) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/asset/list", {
                method: "POST",
                headers: {
                    "X-Session-ID": sessionId,
                    "X-Company-ID": companyId,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    page: page,
                    pageSize: 10,
                    filters: filters,
                }),
            });

            const result = await response.json();
            // console.log(result);
            return result?.assets || [];
        } catch (error) {
            console.log("error: ", error);
            return [];
        }
    }
    return [];
};
