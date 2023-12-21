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
                <div className="flex justify-between items-center ">

                    <img alt="" src="/assets/gift-voucher2.png"
                        className="w-52 absolute top-24 left-20 giftopenCss" />

                    <div className={`transition-all duration-1000 ease-in-out `}>
                        <div className={`absolute top-16 w-[480px] right-16 gift1FormCss`}>
                            <h1 className={`text-[20px] text-white mx-4`}>
                                To avail the lucky gift, kindly fill and submit
                            </h1>
                            <div className="w-full rounded-2xl border-4 border-[#669ef3] p-4 bg-black-rgba">
                                <div className="mx-auto w-full flex flex-col space-y-2">
                                    <div className="flex py-1">
                                        <input
                                            className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
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
                                </div>
                            </div>
                            <div className="flex py-3 mx-40">
                                <a
                                    href="# "
                                    className="w-40  p-1.5  border-3 border-[#669ef3] text-[24px] text-white rounded-lg bg-[#2f49af] text-center 
                                    cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                    onClick={() => handleTryOff()}
                                >
                                    Submit
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            {/* )} */}
        </div>

    )
};
export default GetUserForm;

