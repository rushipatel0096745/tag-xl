"use server";

import { getComapnyData, getCompanySessionId } from "./getComapnyData";

export interface Filter {
    field?: string | null;
    condition?: string | null;
    text?: string | null;
}

export interface PreUseTemplate {
    id: number;
    title: string;
    questions: Question[];
}

export interface Question {
    id: number;
    question: string;
    type: string;
    multiselect_value: any;
}

export const getPreuseTemplateList = async function (page: number = 1, filters: Filter[] = []) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/pre-use-template/list", {
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
            return result?.pre_use_templates || [];
        } catch (error) {
            console.log("error: ", error);
            return [];
        }
    }
    return [];
};

export const getMaintenanceTemplateList = async function (page: number, filters: Filter[] = []) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/maintenance-template/list", {
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
            return result?.maintenance_template || [];
        } catch (error) {
            console.log("error: ", error);
            return [];
        }
    }
    return [];
};

export const getPreuseTemplateQuestions = async function (id: number) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/asset/pre-use-template/get/"+id, {
                method: "GET",
                headers: {
                    "X-Session-ID": sessionId,
                    "X-Company-ID": companyId,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();
            // console.log(result);
            return result?.questions || [];
        } catch (error) {
            console.log("error: ", error);
            return [];
        }
    }
    return {};
};
