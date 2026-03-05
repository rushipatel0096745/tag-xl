import React, { Suspense } from "react";
import CompanyDashboard from "../components/CompanyDashboard";
import { getComapnyData, getCompanySessionId } from "@/app/services/company-admin/getComapnyData";

type DashboardData = {
    has_error: boolean | null;
    message: string;
    total_assets: number;
    total_maintenance: number;
    total_certificate_expiry: number;
    total_failures: number;
    total_tag_available_of_use: number;
    total_maintenance_due: number;
    total_alerts: number;
};

const CompanyDashboardPage = async () => {
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    const companySessionId = await getCompanySessionId();

    const dashboardUrl = "https://tagxl.com/api/company/dashboard-overview";
    let dashboardData: DashboardData = {
        has_error: null,
        message: "",
        total_assets: 0,
        total_maintenance: 0,
        total_certificate_expiry: 0,
        total_failures: 0,
        total_tag_available_of_use: 0,
        total_maintenance_due: 0,
        total_alerts: 0,
    };

    try {
        const dashboardRes = await fetch(dashboardUrl, {
            method: "GET",
            headers: {
                "X-Company-ID": companyId,
                "X-Session-ID": companySessionId,
            },
            // headers: companyId ? { "X-Company-ID": companyId } : {},
        });

        if (!dashboardRes.ok) {
            console.error("Failed to fetch dashboard:", dashboardRes.status, dashboardRes.statusText);
            dashboardData = { has_error: true, status: dashboardRes.status };
        } else {
            dashboardData = await dashboardRes.json();
        }
    } catch (err) {
        console.error("Error fetching dashboard:", err);
        dashboardData = { has_error: true, error: String(err) };
    }

    const dashboardArr = Object.entries(dashboardData)

    const dataArr = dashboardArr.map(([key, value], i) => {
        return {index: i+1, key, value}
    })

    dataArr.splice(0,2)

    // const dataArr = [
    //     {index: 1, key: dashboardData}
    // ];

    return (
        <div>
            <Suspense fallback={<p className='text-2xl'>Loading....</p>}>
                <CompanyDashboard initialData={dataArr} />
            </Suspense>
        </div>
    );
};

export default CompanyDashboardPage;
