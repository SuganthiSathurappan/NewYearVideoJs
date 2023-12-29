import React, { useEffect, useState } from "react";


const GetCoinForm = ({ handleTryOff }) => {

    const [showFirstImage, setShowFirstImage] = useState(true);
    let textContent = "To avail for Gold Coin, kindly fill and submit"
    useEffect(() => {
        if (showFirstImage) {

            setTimeout(() => {
                setShowFirstImage(false);
            }, 5000);
        }
        // Cleanup function
        return () => {

        };
    }, [])

    return (
        <>
            {showFirstImage ? (
                <div className="giftVoucherCss tryContentCss">
                    <img alt="" src="/assets/Gold-Coin.png" className="w-[230px] " />
                </div>

            ) : (
                <div>
                    <section className="minigiftBoxCss">
                        <div className="flex  justify-center  z-1">
                            <div className="flex ">
                                <div className="flex items-center portraitImage portraitCoinImage" >
                                    <img alt="" src="/assets/Gold-Coin-left.png" className="z-10 w-[300px]" />
                                </div>
                                <div className=" transition-all duration-1000 ease-in-out -ml-5 gift1FormeventcssMobile gift1CoinEventcss">
                                    <h1 className={`text-white text-center text-sm`}>
                                    To avail for Gold Coin, kindly fill and submit
                                    </h1>
                                    <div className="border-[#669ef3] px-4 py-2  bg-black-rgba border-4 rounded-lg">
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

                                            <div className="relative  text-center mb-2 " >
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
                            </div>
                        </div>
                    </section>
                </div>
            )
            }
        </>
    )
};
export default GetCoinForm;

