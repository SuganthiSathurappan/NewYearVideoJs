import React, { useEffect, useState } from "react";
import MobileDeviceForm from "./mobileDeviceForm";
import axios from 'axios'


const GetUserForm = ({ handleTryOff }) => {

    const isMobile = window.innerWidth <= 480;
    const [showFirstImage, setShowFirstImage] = useState(true);
    let textContent = "To avail for Gold Coin, kindly fill and submit"

     useEffect(() => {
        // const url = "https://13.232.110.68:3000/api/getAllCampaignType";
        const url = "http://localhost:3000/api/getAllCampaignType";
        axios.get(url).then(response => {           
            console.log("Full Data : ", response.data)
        })

    }, [])

    useEffect(() => {
        if (showFirstImage) {

            setTimeout(() => {
                setShowFirstImage(false);
            }, 4000);
        }
        // Cleanup function
        return () => {

        };
    }, [])

    return (
        <div className="flex flex-col justify-between items-center font-poppins">
            {showFirstImage ? (
                <div className="absolute top-0 giftBoxContentCss giftGoldCss">
                    <img alt="" src="/assets/Gold-Coin.png" className="" />
                </div>
            ) : (
                // Changes responsive form
                // <>
                //     <div className="flex justify-center">
                //         <div className="flex absolute top-28 z-1">
                //             <div className="flex items-center relative -left-3 ">
                //                 <img alt="" src="/assets/Gold-Coin-left.png" className="w-52 z-10 giftopenCss" />
                //             </div>
                //             <div className="-mt-10 transition-all duration-1000 ease-in-out gift1FormCss">
                //                 <h1 className={`text-[19px] text-white mx-2`}>
                //                     To avail the lucky gift, kindly fill and submit
                //                 </h1>
                //                 <div className="rounded-2xl border-4 border-[#669ef3] p-4 bg-black-rgba">
                //                     <div className="flex py-1">
                //                         <input className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline bg-gray-100 text-gray-600 focus:border-white`}
                //                             type="text"
                //                             placeholder="Enter your Name"
                //                         />
                //                     </div>
                //                     <div className="flex py-1">
                //                         <input
                //                             className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                //                                 ? "bg-[#302E30] text-white focus:border-white"
                //                                 : "bg-gray-100 text-black focus:border-black"
                //                                 }`}
                //                             type="tel"
                //                             placeholder="Phone Number"
                //                         />
                //                     </div>
                //                     <div className="flex py-1">
                //                         <input
                //                             className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                //                                 ? "bg-[#302E30] text-white focus:border-white"
                //                                 : "bg-gray-100 text-black focus:border-black"
                //                                 }`}
                //                             type="tel"
                //                             placeholder="Email Id"
                //                         />
                //                     </div>
                //                     <div className="flex py-1">
                //                         <textarea
                //                             className={`w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline ${darkMode
                //                                 ? "bg-[#302E30] text-white focus:border-white"
                //                                 : "bg-gray-100 text-black focus:border-black"
                //                                 }`}
                //                             type="email"
                //                             placeholder="Address"
                //                         />
                //                     </div>
                //                     <div className="flex justify-center mt-2">
                //                         <a href="#"
                //                             className="w-40  p-1.5  border-3 border-[#669ef3] text-[24px] text-white rounded-lg bg-[#2f49af] text-center 
                //                cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                //                             onClick={() => handleTryOff()}>
                //                             Submit
                //                         </a>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </>

                // Changes responsive form
                <section className="absolute image-container giftopenCss">
                    <div className="flex  justify-center top-0  z-1">
                        <div className="flex m-4">
                            <div className="flex items-center relative formCoinImage formImage" >
                                <img alt="" src="/assets/Gold-Coin-left.png" className="z-10 giftopenCss" />
                            </div>
                            {isMobile ? (
                                // Form for mobile devices
                                <MobileDeviceForm handleTryOff={handleTryOff} textContent={textContent} />
                            ) : (
                                // Form for other devices
                                <div className=" transition-all duration-1000 ease-in-out -ml-6 gift1Formeventcss ">
                                    <h1 className={`text-white text-center h1Giftcss`}>
                                        To avail for Gold Coin, kindly fill and submit
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
                                                    className="w-full px-2 h-16 rounded-lg font-medium border-2 border-transparent
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

            )}
        </div>

    )
};
export default GetUserForm;

