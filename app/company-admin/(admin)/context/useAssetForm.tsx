import { createContext, useState } from "react";

interface AssetData {

}

export const AssetFormContext = createContext<undefined>(undefined);

export const AssetFormContextProvider = function ({ children }: { children: React.ReactNode }) {

    const [formData, setFormData] = useState({})

    // const handleSubmit

    return (<AssetFormContext.Provider value={undefined}>{children}</AssetFormContext.Provider>);
};
