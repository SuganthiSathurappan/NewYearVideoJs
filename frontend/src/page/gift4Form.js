import React, { useEffect, useState } from "react";
import MobileDeviceForm from "./exampleForm";

const GetUserForm = ({ handleTryOff }) => {
  
    const isMobile = window.innerWidth <= 480;

    const [showFirstImage, setShowFirstImage] = useState(true);
    let textContent = "Groceries voucher"
    useEffect(() => {
        // if (showFirstImage) {

        //     setTimeout(() => {
        //         setShowFirstImage(fals);
        //     }, 4000);
        // }
        // Cleanup function
        return () => {

        };
    }, [])

    return (
        <div className="flex flex-col justify-between items-center font-poppins">
             {/* // Changes responsive form */}
                <section className="absolute image-container">
                    <div className="flex  justify-center top-0  z-1">
                        <div className="flex m-4">
                            <div className="flex items-center relative formCoinImage formImage" >
                                <img alt="" src="/assets/gift-voucher2.png" className="z-10 giftopenCss" />
                            </div>
                            {isMobile ? (
                                // Form for mobile devices
                                <MobileDeviceForm handleTryOff={handleTryOff} textContent={textContent} />
                            ) : (
                                // Form for other devices
                                <div className=" transition-all duration-1000 ease-in-out -ml-6 gift1Formeventcss">
                                    <h1 className={`text-white text-center`}>
                                        To avail the Groceries voucher , kindly fill and submit
                                    </h1>
                                    <div className="border-[#669ef3] px-4 py-4 bg-black-rgba border-4 rounded-lg  gift1VoucherFormcss">
                                        <form className='h-full'>
                                            {/* Email input */}
                                            <div className=" mb-2 " data-te-input-wrapper-init>
                                                <input className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                            text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
                                                    type="text"
                                                    placeholder="Enter your Name"
                                                />
                                            </div>

                                            {/* Password input */}
                                            <div className="relative mb-2" data-te-input-wrapper-init>
                                                <input
                                                    className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                         placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"

                                                    type="tel"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                            {/* Password input */}
                                            <div className="relative mb-2" data-te-input-wrapper-init>
                                                <input
                                                    className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                               placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                                    type="tel"
                                                    placeholder="Email Id"
                                                />
                                            </div>
                                            {/* Password input */}
                                            <div className="relative mb-3" data-te-input-wrapper-init>
                                                <textarea
                                                    className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                                  placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                                    type="email"
                                                    placeholder="Address"
                                                />
                                            </div>

                                            <div className="relative  text-center" >
                                                <a href="#"
                                                    className=" px-5 py-2  border-3 border-[#669ef3] text-[20px] text-white rounded-lg bg-[#2f49af] text-center 
                                   cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                                    onClick={() => handleTryOff()}>
                                                    Submit
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </section>
        </div>

    )
};
export default GetUserForm;

