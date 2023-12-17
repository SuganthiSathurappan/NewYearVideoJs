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
        <div className="flex flex-col justify-center items-center font-poppins ">

            <div
                className={`contact-form common`}
            >
                {displayContact &&
                    <div>
                        <div className="mx-auto w-full  flex flex-col space-y-2">
                            <div className="animate-pulse videoFadeInAni mt-56">
                                <span className="font-sans text-[3cqw] mt-24">
                                    Thanks For Watching
                                </span>

                                <span className="text-[2cqw] mt-28">
                                    <br /> Further Enquiry
                                </span>
                            </div>
                            <div className="flex py-2 justify-center ">
                                <a href
                                    className="w-auto p-3 font-semibold border-4  border-[#e78b08] text-[20px]  text-deep-purple-900  rounded-xl bg-[#dfcb18] text-center
                           cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                                    onClick={() => handleContactUs()}
                                >
                                    Contact Us
                                </a>
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
                        <div className="w-full  rounded-2xl border-5 border-[#e78b08] p-4  bg-black-rgba">
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

        </div>
    )

}
export default ContactForm;

