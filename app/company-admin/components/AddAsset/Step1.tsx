import React, { startTransition, useActionState, useState } from "react";

type TagType = "RFID" | "QR" | "Manual" | "";

interface TagItem {
    tag_type: TagType;
    uid: string;
}

const Step1 = () => {
    const initialList: TagItem = {
        tag_type: "",
        uid: "",
    };
    const [tagList, setTagList] = useState<TagItem>(initialList);

    const [showMsg, setShowMsg] = useState<string>("");

    // const [state, formAction, isPending] = useActionState(action, { success: null, error: "", data: "" });

    const handleUidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const updated = tagList;
        updated.uid = value;
        setTagList(updated);
    };

    const handleTagTypeSelect = (type: TagType) => {
        const updated = tagList;
        updated.tag_type = type;
        setTagList(updated);
        console.log(tagList);
    };

    const handleSave = () => {
        // Filtering empty rows
        // const data = tagList.filter((item) => item.tag_type && item.uid);
        console.log("form data", tagList);

        // startTransition(() => formAction(data));

        setTagList(initialList);

        setShowMsg("Tag created successfully");
    };

    const tagTypeOptions: { label: string; value: TagType; text: string }[] = [
        { label: "RFID", value: "RFID", text: "Scan or enter RFID tag" },
        { label: "QR", value: "QR", text: "Scan or enter QR code" },
        { label: "Manual", value: "Manual", text: "Enter the unique ID" },
    ];
    return (
        <div className='tab-content border border-solid border-[#ededed] rounded-2xl p-5.5'>
            {showMsg && (
                <div className='text-green-700'>
                    <p>{showMsg}</p>
                </div>
            )}
            <div className='block'>
                <div className='add-one-by-one_content'>
                    <h4 className='title h4 mb-5 text-[16px] font-semibold leading-5.5'>Select Tag</h4>
                    <div className='add-one-by-one_items flex flex-col gap-2.5'>
                        <div className='add-one-by-one_item grid grid-cols-[316px_1fr_28px] gap-2.5'>
                            {/* Tag Type Selector */}
                            <div className='actions-btn flex items-center justify-between gap-2'>
                                {tagTypeOptions.map((option) => (
                                    <button
                                        key={option.value}
                                        type='button'
                                        onClick={() => handleTagTypeSelect(option.value)}
                                        className={`btn min-w-25 cursor-pointer text-center rounded-4xl justify-center items-center gap-[6px] h-[38px] px-[10px] py-[14px] text-[14px] font-medium inline-flex border border-solid transition-all duration-150
                                                ${
                                                    tagList.tag_type === option.value
                                                        ? "bg-[#263f94] border-[#263f94] text-white"
                                                        : "bg-[#f5f6fa] border-[#c9d5ff] text-[#111c43]"
                                                }`}>
                                        {option.label}
                                    </button>
                                ))}
                            </div>

                            {/* UID Input */}
                            <div className='fancy-input relative'>
                                <input
                                    placeholder=''
                                    type='text'
                                    value={tagList.uid}
                                    name='uid'
                                    className='text-[#17181a] bg-[#f5f6fa] border border-solid border-[#efefef] rounded-[10px] w-full h-11 text-[14px] font-medium pt-[18px] px-[14px] pb-[8px]'
                                    onChange={(event) => handleUidChange(event)}
                                />
                                <label className='form-label absolute left-3 px-0 py-0.5 text-[#676767] top-1 text-[11px] pointer-events-none'>
                                    UID<span className='text-red-500'>*</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step1;
