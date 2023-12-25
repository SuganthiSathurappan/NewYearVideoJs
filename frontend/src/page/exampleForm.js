import React from 'react';

const LoginForm = () => {
    return (
        <section className="">
            <div className="container">
                <div className=" flex flex-wrap items-end justify-end lg:justify-between">
                    {/* Left column container with background */}
                    <div className="relative left-32 z-1 top-14 md:w-4/12 lg:w-[300px]">
                        <img
                            src="/assets/voucher-left.png"
                            className="w-full"
                            alt="Phone image"
                        />
                    </div>

                    {/* Right column container with form */}
                    <div className="md:w-8/12 lg:w-1/2 right-52 top-10 relative border-[#669ef3] p-4 bg-black-rgba border-4 rounded-lg  sm:h[280px] ">
                        <form className='h-full '>
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
                            <div className="relative mb-3   " data-te-input-wrapper-init>
                                <textarea
                                    className="w-full px-2 py-2 rounded-lg font-medium border-2 border-transparent
                                              placeholder-gray-500 text-sm focus:outline-none focus:border-2 focus:outline"
                                    type="email"
                                    placeholder="Address"
                                />
                            </div>

                            <div className="relative  text-center" data-te-input-wrapper-init>
                                <a href="#"
                                    className=" px-5 py-2  border-3 border-[#669ef3] text-[20px] text-white rounded-lg bg-[#2f49af] text-center 
                               cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                >
                                    Submit
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LoginForm