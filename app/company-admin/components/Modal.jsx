"use client";

import React, { useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-200'
            onClick={onClose}>
            {/* <div
                className='relative w-full max-w-[720px] max-h-[90vh] overflow-auto p-4 box-border'
                onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={onClose}
                    aria-label='Close modal'
                    className='absolute -top-2 -right-2 bg-white rounded-full p-1 shadow text-gray-700 hover:text-gray-900'>
                    &times;
                </button>
                {children}
            </div> */}
            {children}
        </div>
    );
};

export default Modal;
