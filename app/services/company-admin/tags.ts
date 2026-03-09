import { getComapnyData, getCompanySessionId } from "./getComapnyData";

export const getAllTagList = async function (page: number = 1, filters: any[] = []) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/tag/list", {
                method: "POST",
                headers: {
                    "X-Session-ID": sessionId,
                    "X-Company-ID": companyId,
                    "Content-Type": "application/json",
                },
                body: JSON  .stringify({
                    page: page,
                    pageSize: 10,
                    filters: filters,
                }),
            });

            const result = await response.json();
            // console.log(result);
            return result?.tags || [];
        } catch (error) {
            console.log("error: ", error);
            return [];
        }
    }
    return [];
};

export const getUnassignedTagList = async function (page: number = 1, filters: any[] = []) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/tag/unassigned-list", {
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
            return result?.tags || [];
        } catch (error) {
            console.log("error: ", error);
            return [];
        }
    }
    return [];
};

export const createTags = async function (prevState: any, formData: any) {
    "use server";

    console.log("data to be posted: ", formData);

    // const sessionId = await getCompanySessionId();
    // const companyData = await getComapnyData();
    // const companyId = companyData?.company_id;

    // if (companyId && sessionId) {
    //     try {
    //         const response = await fetch("https://tagxl.com/api/company/tag/create", {
    //             method: "POST",
    //             headers: {
    //                 "X-Session-ID": sessionId,
    //                 "X-Company-ID": companyId,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         const result = await response.json();

    //         if(result.has_error) {
    //             console.log(result);
    //             return {
    //                 success: false,
    //                 error: "Unable to Update User",
    //                 data: "",
    //             };
    //         }
    //         console.log(result);
    //         return {
    //             success: true,
    //             error: "",
    //             data: "",
    //         };

    //     } catch (error) {
    //         console.log("error: ", error);
    //         return {
    //             success: false,
    //             error: "Failed to connect to the server",
    //             data: "",
    //         };
    //     }
    // } else {
    //      return {
    //             success: false,
    //             error: "companyId or sessionId not found",
    //             data: "",
    //         };
    // }
};

export const getTag = async function (id: number) {
    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    if (companyId && sessionId) {
        try {
            const response = await fetch("https://tagxl.com/api/company/tag/get/"+id, {
                method: "GET",
                headers: {
                    "X-Session-ID": sessionId,
                    "X-Company-ID": companyId,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if(result.has_error) {
                console.log(result);
                return {
                    success: false,
                    error: "Unable to Get Tag",
                    data: "",
                };
            }
            // console.log(result);
            return {
                success: true,
                error: "",
                data: result.tag,
            };

        } catch (error) {
            console.log("error: ", error);
            return {
                success: false,
                error: "Failed to connect to the server",
                data: "",
            };
        }
    } else {
         return {
                success: false,
                error: "companyId or sessionId not found",
                data: "",
            };
    }
};
 
export const updateTag = async function (id: number, prevState: any, formData: any) {
    "use server";

    console.log("data to be posted: ", formData);

    const sessionId = await getCompanySessionId();
    const companyData = await getComapnyData();
    const companyId = companyData?.company_id;

    // if (companyId && sessionId) {
    //     try {
    //         const response = await fetch("https://tagxl.com/api/company/tag/update/"+id, {
    //             method: "POST",
    //             headers: {
    //                 "X-Session-ID": sessionId,
    //                 "X-Company-ID": companyId,
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formData),
    //         });

    //         const result = await response.json();

    //         if(result.has_error) {
    //             console.log(result);
    //             return {
    //                 success: false,
    //                 error: "Unable to Update User",
    //                 data: "",
    //             };
    //         }
    //         console.log(result);
    //         return {
    //             success: true,
    //             error: "",
    //             data: "",
    //         };

    //     } catch (error) {
    //         console.log("error: ", error);
    //         return {
    //             success: false,
    //             error: "Failed to connect to the server",
    //             data: "",
    //         };
    //     }
    // } else {
    //      return {
    //             success: false,
    //             error: "companyId or sessionId not found",
    //             data: "",
    //         };
    // }
};
