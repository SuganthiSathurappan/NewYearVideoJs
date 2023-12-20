import React, { useState } from "react";


const GetUserForm = ({ handleTryOff }) => {
    const [darkMode, setDarkMode] = useState(false);


    return (
        <div className="flex flex-col justify-center items-center font-poppins ">

            <div className={`contact-form common`}>
                <h1 className={`text-center  md:text-xl text-[14px]   p-3 text-white `}>
                    For collect the gift,<br />
                    Please enter your details here
                </h1>
                {/* <div className="w-full  rounded-2xl border-5 border-[#e78b08] p-4  bg-black-rgba">
                    <div className="mx-auto w-full  flex flex-col space-y-2">
                        <div className="flex py-1">
                            <input
                                className={`w-full px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`}
                                type="text"
                                placeholder="Enter your Name"
                            />

                        </div>

                        <div className="flex py-1">

                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="tel"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="flex py-1">
                            <input
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="tel"
                                placeholder="Email Id"
                            />
                        </div>
                        <div className="flex py-1">
                            <textarea
                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                    ? "bg-[#302E30] text-white focus:border-white"
                                    : "bg-gray-100 text-black focus:border-black"
                                    }`}
                                type="email"
                                placeholder="Address"
                            />
                        </div>
                    </div>
                </div> */}
                                                        {/* Change Design */}
                            <div className='flex justify-center basis-1/2  '>
                                <div className=' rounded-xl border-5 border-[#e78b08] bg-black-rgba space-y-2 m-1.5 p-1'>
                                        <div className='flex flex-col flex-wrap space-y-3'>
                                            <div className=''>
                                            <input type="text" name='name'  placeholder="Enter your Name"  className={`w-80 md:w-94 px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                                    text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`} />
                                            </div>
                                            <div className=''>
                                            <input type="email" name='email'  placeholder="Enter your Email"  className={`w-80 md:w-94 px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                                    text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`} />
                                            </div>
                                            <div className=''>
                                            <input type="tel" name='number'  placeholder="Enter your Number"  className={`w-80 md:w-94 px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                                    text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`} />
                                            </div>
                                        </div>  
                                        <div className="flex py-1">
                                            <textarea
                                                className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                                    ? "bg-[#302E30] text-white focus:border-white"
                                                    : "bg-gray-100 text-black focus:border-black"
                                                    }`}
                                                type="email"
                                                placeholder="Address"
                                            />
                                        </div>                              
                                </div>
                            </div>



                <div className="flex mt-3 py-1 justify-center">
                    <a href
                        className="w-auto p-1.5 font-semibold border-4  border-[#e78b08] text-[20px]  text-deep-purple-900  rounded-xl bg-[#dfcb18] text-center
                               cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                        onClick={() => handleTryOff()}
                    >
                        Try Your Luck Again
                    </a>
                </div>
            </div>

        </div>
    );
};
export default GetUserForm;

