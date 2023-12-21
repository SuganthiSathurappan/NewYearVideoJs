import React, { useEffect, useState } from "react";


const GetUserForm = ({ handleTryOff }) => {
    const [darkMode, setDarkMode] = useState(false);


    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
        // if (showFirstImage) {

        //     setTimeout(() => {
        //         setShowFirstImage(false);
        //     }, 4000);
        // }
        // Cleanup function
        return () => {

        };
    }, [])

    return (
        <div className="flex flex-col justify-between items-center font-poppins">
            {/* {showFirstImage ? (
                <div className="absolute top-0 giftBoxContentCss">
                    <img alt="" src="/assets/gift-voucher2.png" className="w-56 mt-28" />
                </div>
            ) : ( */}
                <>
                    <div className="flex justify-center">
                        <div className="flex absolute top-28 ">
                            <div className="flex items-center relative -top-2 -left-3 ">
                                <img alt="" src="/assets/gift-voucher2.png" className="w-56  giftopenCss" />
                            </div>
                            <div className="-mt-10 transition-all duration-1000 ease-in-out gift1FormCss">
                                <h1 className={`text-[19px] text-white mx-2`}>
                                    To avail the Cash Voucher, kindly fill and submit
                                </h1>
                                <div className="rounded-2xl border-4 border-[#669ef3] p-4 bg-black-rgba">
                                    <div className="flex py-1">
                                        <input className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
                                            type="text"
                                            placeholder="Enter your Name"
                                        />
                                    </div>
                                    <div className="flex py-1">
                                        <input
                                            className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                                                ? "bg-[#302E30] text-white focus:border-white"
                                                : "bg-gray-100 text-black focus:border-black"
                                                }`}
                                            type="tel"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div className="flex py-1">
                                        <input
                                            className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                                                ? "bg-[#302E30] text-white focus:border-white"
                                                : "bg-gray-100 text-black focus:border-black"
                                                }`}
                                            type="tel"
                                            placeholder="Email Id"
                                        />
                                    </div>
                                    <div className="flex py-1">
                                        <textarea
                                            className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                                                ? "bg-[#302E30] text-white focus:border-white"
                                                : "bg-gray-100 text-black focus:border-black"
                                                }`}
                                            type="email"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div className="flex justify-center mt-2">
                                        <a href="#"
                                            className="w-40  p-1.5  border-3 border-[#669ef3] text-[24px] text-white rounded-lg bg-[#2f49af] text-center 
                               cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                            onClick={() => handleTryOff()}>
                                            Submit
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            {/* )} */}
        </div>

    )
};
export default GetUserForm;

