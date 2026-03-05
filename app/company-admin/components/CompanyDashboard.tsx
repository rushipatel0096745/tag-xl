import React from "react";

const CompanyDashboard = ({ initialData }) => {
    console.log(initialData);

    return (
        <div className='p-5.5'>
            <div className='head mb-6'>
                <h2 className='text-[20px] font-bold leading-6.5'>Dashboard</h2>
            </div>

            <div className='body'>
                <div className='card-box mb-16 bg-[#fff] border rounded-[18px] shadow-xl/30 shadow-white'>
                    <div className='card-box-head pt-5.5 px-5.5 pb-6 flex items-center justify-between'>
                        <h3 className='text-[18px] font-semibold leadin-6'>Quick Overview</h3>
                    </div>
                    <div className='card-box-body p-[22px]'>
                        <div className='row flex flex-wrap gap-4 w-full'>
                            
                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <a href='/link' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>Total Assets</h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>1</div>
                                            </div>
                                            <div className='stat-icon opacity-[0.4] bg-no-repeat bg-cover flex items-center justify-center w-[80px] h-[80px] bg-center' />
                                        </div>
                                        <div className='stat-link flex items-center justify-between mt-4'>
                                            <span className='stat-link-text text-[13px] font-normal underline decoration-1'>
                                                View all
                                            </span>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                width={24}
                                                height={24}
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                className='opacity-[0.6]'>
                                                <path
                                                    d='M7 17.071L16.8995 7.17155M17 17.071V7.07104H7'
                                                    stroke='#111C43'
                                                    strokeWidth={2}
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
