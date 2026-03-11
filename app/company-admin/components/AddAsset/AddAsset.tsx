"use client";

import React, { useState } from "react";
import Step1 from "./Step1";
import Step4 from "./Step4";
import Step3 from "./Step3";
import Step2 from "./Step2";

const AddAsset = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        tag_type: "",
        uid: "",
        tag_id: "",
        name: "",
        location_id: "",
        batch_code: "",
        image: null as File | null,
        manual_template_id: "",
        status: "",
        oem_certificate: null as File | null,
        third_party_certificate: null as File | null,
        third_party_start_date: "",
        third_party_expiry_date: "",
        pre_use_template_id: "",
        maintenance_template_id: "",
    });

    const [errors, setErrors] = useState<any>({});

    const updateForm = function (name: string, value: any) {
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errors[name]) {
            setErrors((prev: any) => ({ ...prev, [name]: "" }));
        }
    };

    const requiredFields = ["tag_id", "name", "location_id", "batch_code", "oem_certificate"];

    const validate = function () {
        const newErrors: any = {};

        if (currentStep === 1) {
            // if (!formData.tag_id) newErrors.tag_id = "Tag id is required";
            if (!formData.tag_type) newErrors.tag_type = "Select the Tag Type is required";
            if (!formData.uid) newErrors.uid = "Tag uid is required";
        }

        if (currentStep === 2) {
            if (!formData.name) newErrors.name = "Name is required";
            if (!formData.location_id) newErrors.location_id = "Location is required";
            if (!formData.batch_code) newErrors.batch_code = "Batch code is required";
        }

        if (currentStep === 3) {
            if (!formData.oem_certificate) newErrors.oem_certificate = "OEM Certificate is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <>
            {currentStep === 1 && (
                <Step1
                    next={nextStep}
                    updateForm={updateForm}
                    validate={validate}
                    errors={errors}
                    formData={formData}
                />
            )}

            {currentStep === 2 && (
                <Step2
                    prev={prevStep}
                    next={nextStep}
                    updateForm={updateForm}
                    validate={validate}
                    errors={errors}
                    formData={formData}
                />
            )}

            {currentStep === 3 && (
                <Step3
                    prev={prevStep}
                    next={nextStep}
                    updateForm={updateForm}
                    validate={validate}
                    errors={errors}
                    formData={formData}
                />
            )}

            {currentStep === 4 && (
                <Step4
                    prev={prevStep}
                    next={nextStep}
                    updateForm={updateForm}
                    validate={validate}
                    errors={errors}
                    formData={formData}
                />
            )}
        </>
    );
};

export default AddAsset;
