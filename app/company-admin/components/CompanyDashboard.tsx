import React from "react";
import { DashboardData } from "../(admin)/page";
import Link from "next/link";

const CompanyDashboard = ({ initialData }: { initialData: DashboardData }) => {
    // console.log(initialData);

    return (
        <div className='p-5.5'>
            <div className='head mb-6'>
                <h2 className='text-[20px] font-bold leading-6.5'>Dashboard</h2>
            </div>

            <div className='body'>
                <div className='card-box mb-16 bg-[#fff] border-gray-700 rounded-[18px] shadow-3xl shadow-white'>
                    <div className='card-box-head pt-5.5 px-5.5 pb-6 flex items-center justify-between'>
                        <h3 className='text-[18px] font-semibold leading-6'>Quick Overview</h3>
                    </div>
                    <div className='card-box-body p-[22px]'>
                        <div className='row flex flex-wrap gap-4 w-full'>
                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <Link href='/company-admin/asset' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border-gray-500 rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>Total Assets</h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>
                                                    {initialData.total_assets ? initialData.total_assets : 0}
                                                </div>
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
                                </Link>
                            </div>

                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <Link href='/company-admin' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border-gray-500 rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>
                                                    Assets in Maintenance
                                                </h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>
                                                    {initialData.total_maintenance ? initialData.total_maintenance : 0}
                                                </div>
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
                                </Link>
                            </div>

                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <Link href='/company-admin/alerts/recertification-needed' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border-gray-500 rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>
                                                    Recertification Needed
                                                </h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>
                                                    {initialData.total_certificate_expiry
                                                        ? initialData.total_certificate_expiry
                                                        : 0}
                                                </div>
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
                                </Link>
                            </div>

                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <Link href='/company-admin/alerts/asset-failure' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border-gray-500 rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>Assets Failure</h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>
                                                    {initialData.total_failures ? initialData.total_failures : 0}
                                                </div>
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
                                </Link>
                            </div>

                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <Link href='/company-admin/tag/unassign-tag' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border-gray-500 rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>Unassigned Tags</h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>
                                                    {initialData.total_tag_available_of_use
                                                        ? initialData.total_tag_available_of_use
                                                        : 0}
                                                </div>
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
                                </Link>
                            </div>

                            <div className='col-4 w-[calc(33.33%-11px)]'>
                                <Link href='/company-admin/alerts/maintenance-check-due' className='state-card-link'>
                                    <div className='stat-card total-assets bg-[#f5f6fa] border-gray-500 rounded-[18px] pt-[22px] pr-4 pb-4 pl-5.5'>
                                        <div className='stat-card-content flex justify-between gap-4'>
                                            <div className='stat-card-content-inner flex flex-col gap-5.5 '>
                                                <h4 className='h4 text-xl font-[600px] leading-5.5'>
                                                    Maintenance Check Due
                                                </h4>
                                                <div className='stat-value text-[36px] font-bold leading-11'>
                                                    {initialData.total_maintenance_due
                                                        ? initialData.total_maintenance_due
                                                        : 0}
                                                </div>
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
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card-box mp-24 bg-[#fff] border-gray-700 rounded-[18px] shadow-3xl shadow-white'>
                    <div className='card-box_head default pt-5.5 pb-6 px-5.5'>
                        <h3 className='h3 text-[18px] font-semibold leading-6'>Quick Actions</h3>
                    </div>
                    <div className='card-box_body p-5.5'>
                        <div className='actions-btn flex items-center gap-2.5'>
                            <Link
                                className='icon-text-button primary cursor-pointer bg-[#fff] border border-solid border-[#845adf26] rounded-4xl inline-flex items-center text-[14px] pt-1 pr-3 pb-1 pl-1 font-medium'
                                href='/company-admin/asset/add'>
                                <span className='icon-circle'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={20}
                                        height={20}
                                        viewBox='0 0 20 20'
                                        fill='none'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M10 4C10.355 4 10.6429 4.28782 10.6429 4.64286V9.35714H15.3571C15.7122 9.35714 16 9.64496 16 10C16 10.355 15.7122 10.6429 15.3571 10.6429H10.6429V15.3571C10.6429 15.7122 10.355 16 10 16C9.64496 16 9.35714 15.7122 9.35714 15.3571V10.6429H4.64286C4.28782 10.6429 4 10.355 4 10C4 9.64496 4.28782 9.35714 4.64286 9.35714H9.35714V4.64286C9.35714 4.28782 9.64496 4 10 4Z'
                                            fill='#845ADF'
                                        />
                                    </svg>
                                </span>
                                <span className='button-label'>Add asset</span>
                            </Link>
                            <Link
                                className='icon-text-button primary cursor-pointer bg-[#fff] border border-solid border-[#845adf26] rounded-4xl inline-flex items-center text-[14px] pt-1 pr-3 pb-1 pl-1 font-medium'
                                href='/company-admin/users-and-roles/user/add'>
                                <span className='icon-circle'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={20}
                                        height={20}
                                        viewBox='0 0 20 20'
                                        fill='none'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M10 4C10.355 4 10.6429 4.28782 10.6429 4.64286V9.35714H15.3571C15.7122 9.35714 16 9.64496 16 10C16 10.355 15.7122 10.6429 15.3571 10.6429H10.6429V15.3571C10.6429 15.7122 10.355 16 10 16C9.64496 16 9.35714 15.7122 9.35714 15.3571V10.6429H4.64286C4.28782 10.6429 4 10.355 4 10C4 9.64496 4.28782 9.35714 4.64286 9.35714H9.35714V4.64286C9.35714 4.28782 9.64496 4 10 4Z'
                                            fill='#845ADF'
                                        />
                                    </svg>
                                </span>
                                <span className='button-label'>Add user</span>
                            </Link>
                            <Link
                                className='icon-text-button primary cursor-pointer bg-[#fff] border border-solid border-[#845adf26] rounded-4xl inline-flex items-center text-[14px] pt-1 pr-3 pb-1 pl-1 font-medium'
                                href='/company-admin/template-master/manual-template/add'>
                                <span className='icon-circle'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={20}
                                        height={20}
                                        viewBox='0 0 20 20'
                                        fill='none'>
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M10 4C10.355 4 10.6429 4.28782 10.6429 4.64286V9.35714H15.3571C15.7122 9.35714 16 9.64496 16 10C16 10.355 15.7122 10.6429 15.3571 10.6429H10.6429V15.3571C10.6429 15.7122 10.355 16 10 16C9.64496 16 9.35714 15.7122 9.35714 15.3571V10.6429H4.64286C4.28782 10.6429 4 10.355 4 10C4 9.64496 4.28782 9.35714 4.64286 9.35714H9.35714V4.64286C9.35714 4.28782 9.64496 4 10 4Z'
                                            fill='#845ADF'
                                        />
                                    </svg>
                                </span>
                                <span className='button-label'>Add manual template</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;
