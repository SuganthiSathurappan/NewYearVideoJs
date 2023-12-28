import React from 'react';

const MobileDeviceForm = ({ handleTryOff, textContent }) => {
    return (
        // Form for mobile devices
        <div className=" transition-all duration-1000 ease-in-out -mt-3 w-full ">
            <h1 className={`text-white text-[8px] text-center`}>
                {`${textContent}`}
            </h1>
            <div className="border-[#669ef3] px-2 py-1 bg-black-rgba border-2 -mt-1 rounded-md  w-[250px]">
                <form className='h-full'>
                    {/* Email input */}
                    <div className="mt-1" data-te-input-wrapper-init>
                        <input className={`w-full px-2 rounded-sm  border-transparent placeholder-gray-500 
      text-[11px] `}
                            type="text"
                            placeholder="Enter your Name"
                        />
                    </div>

                    {/* Password input */}
                    <div className="relative mt-1" data-te-input-wrapper-init>
                        <input
                            className="w-full px-2 rounded-sm border-transparent
   placeholder-gray-500 text-[11px] "

                            type="tel"
                            placeholder="Phone Number"
                        />
                    </div>
                    {/* Password input */}
                    <div className="relative mt-1" data-te-input-wrapper-init>
                        <input
                            className="w-full px-2 rounded-sm  border-transparent
         placeholder-gray-500 text-[11px]"
                            type="tel"
                            placeholder="Email Id"
                        />
                    </div>
                    {/* Password input */}
                    <div className="relative mt-1" data-te-input-wrapper-init>
                        <textarea
                            className="w-full px-2 rounded-sm border-transparent
            placeholder-gray-500 text-[11px] "
                            type="email"
                            placeholder="Address"
                        />
                    </div>

                    <div className="relative my-1 text-center" >
                        <a href="#"
                            className=" px-2 border-1 border-[#669ef3] text-[10px] text-white rounded-sm bg-[#2f49af] text-center 
cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                            onClick={() => handleTryOff()}>
                            Submit
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default MobileDeviceForm