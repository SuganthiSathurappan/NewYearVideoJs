import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const ContactForm = ({ handleTryOff }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [displayContact, setDisplayContact] = useState(true);
    const [displayForm, setDisplayForm] = useState(false);
    const navigate = useNavigate()

    const handleContactUs = () => {
        setDisplayForm(true)

        setDisplayContact(false)
    }
    const handleSubmit = () => {
        navigate('/')
    }
    return (
        <div className="flex flex-col justify-center items-center font-poppins image-container ">


            {displayContact &&
                <div className="giftBoxContentCss overlayTitle1">
                    <div className="mx-auto w-full  space-y-8 ">
                        <div className="animate-pulse videoFadeInAni ">
                            <span className="text-md md:text-[2cqw] text-[#ffdf60]">
                                Feel free to contact
                            </span>
                            {/* <span className="text-xl md:text-[3cqw] mt-28">
                                    <br /> Please Contact
                                </span> */}
                        </div>
                        {/* <div className="flex py-2 justify-center ">
                                <a href
                                    className="w-auto p-3 font-semibold border-4  border-[#e78b08] text-[20px]  text-deep-purple-900  rounded-xl bg-[#dfcb18] text-center
                           cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                    onClick={() => handleContactUs()}
                                >
                                    Contact Us
                                </a>
                            </div> */}
                        <div className="flex flex-col  justify-center text-center ">
                            <span className="text-md md:text-[2.5cqw]  lg:py-0 md:py-2 sm:py-1">
                                +65 9206 6938  </span>
                            <span className="text-md md:text-[2.5cqw] ">
                                 sales@techtist.com
                            </span>
                        </div>
                    </div>
                </div>
            }
            {displayForm &&
                <div className="mt-[5%]">
                    <h1
                        className={`text-center text-xl sm:text-xl p-3 text-white 
                        `}
                    >
                        Contact Details
                    </h1>

                    {/* Change Design */}
                    <div className='flex justify-center basis-1/2'>
                        <div className=' rounded-xl border-5 border-[#e78b08] bg-black-rgba space-y-2 m-1.5 p-4'>
                            <div className='flex flex-col flex-wrap space-y-3'>
                                <div className=''>
                                    <input type="text" name='name' placeholder="Enter your Name" className={`w-96 md:w-94 px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                              text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`} />
                                </div>
                                <div className=''>
                                    <input type="email" name='email' placeholder="Enter your Email" className={`w-96 md:w-94 px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
                                              text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`} />
                                </div>
                                <div className=''>
                                    <input type="tel" name='number' placeholder="Enter your Number" className={`w-96 md:w-94 px-2 py-2  rounded-lg font-medium border-2 border-transparent placeholder-gray-500 
       text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-gray-600 focus:border-white"`} />
                                </div>

                            </div>
                            <div className="flex py-1">
                                <textarea
                                    className={`w-full px-2 py-2 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline ${darkMode
                                        ? "bg-[#302E30] text-white focus:border-white"
                                        : "bg-gray-100 text-black focus:border-black"
                                        }`}
                                    type="Enquiry"
                                    placeholder="Enquiry"
                                />
                            </div>

                            <div className="flex mt-3 py-2 justify-center">
                                <a href
                                    className="w-[200px] p-2 font-semibold border-4  border-[#e78b08] text-[20px]  text-deep-purple-900  rounded-xl bg-[#dfcb18] text-center
                               cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                    onClick={() => handleSubmit()}
                                >
                                    Submit
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </div>


    )

}
export default ContactForm;