import React from "react";
import { createCompany } from "@/app/(auth)/actions/createCompany";
import CompanyAddForm from "@/app/(auth)/components/CompanyAddForm";

const AddCompany = () => {
    return (
        <div className="main p-4">
            <div className="heading-mb-3">
                <h2>Company</h2>
            </div>
            <CompanyAddForm createAction={createCompany}/>
        </div>
    );
};

export default AddCompany;
