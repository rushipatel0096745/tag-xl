import React from "react";

const Header = () => {
    return (
        <div className='flex bg-[#fff] border-b-[#f9f9f9] shadow-2xs shadow-[#3d424508]'>
            <div className='profile flex'>
                <div className='avatar'>
                    <img
                        alt='Logo'
                        loading='lazy'
                        width='34'
                        height='34'
                        decoding='async'
                        data-nimg='1'
                        style={{'color':'transparent'}}>
                        </img>
                </div>
                <div className="profile-name">
                    Super Admin
                </div>
            </div>
        </div>
    );
};

export default Header;
