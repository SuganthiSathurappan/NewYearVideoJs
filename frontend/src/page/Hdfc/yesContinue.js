import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';


const YesContinue = ({ getChildSkip }) => {
    //Content-2
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        // Options for Typed.js
        const text1Options = {
            strings: [
                "For Further Assistance on Next Procedures, You can connect with our business advisor from your nearest branch by dropping an email right away",
            ],
            typeSpeed: 20,
            showCursor: false,
            onComplete: () => {
                // When text1 animation completes
                // Show image and content
                imageRef.current.style.display = "block";
                contentRef.current.style.display = "block";

                // Now animate text2
                animateText2();
            },
        };

        const animateText1 = new Typed(text1Ref.current, text1Options);

        return () => {
            animateText1.destroy();
        };
    }, []);

    const animateText2 = () => {
        const text2Options = {
            strings: [
                "If You would like to enroll in the child plan, you can do so by clicking on this link : " +
                " <a href='https://www.hdfclife.com/children-insurance-plans' style='color: white; text-transform: lowercase;'>https://www.hdfclife.com/children-insurance-plans</a>",
            ],
            typeSpeed: 20,
            showCursor: false,
        };

        new Typed(text2Ref.current, text2Options);
    };

    return (
        <>
            <div className="image-container policyFormCss ">
                <div
                    className="flex flex-col justify-center items-center bg-slate-400  bg-no-repeat bg-cover bg-center  h-[550px]"
                    style={{ backgroundImage: 'url(/assets/hdfc/image/Chapter2-childplan/bg-thank.jpg)' }}
                >

                    {/* Content-2 */}
                    <div className="flex flex-col">
                        <h1
                            ref={text1Ref}
                            className="text-[19px] uppercase w-[860px] text-center text-white font-medium leading-loose"
                        ></h1>
                        <div ref={imageRef} style={{ display: "none" }}>
                            <div className="flex justify-center p-3 ">

                                <div className="relative">
                                    <img src={'/assets/hdfc/image/Chapter2-childplan/email.png'} alt="email_image" className="w-96 " />
                                </div>
                                <div className="flex items-center ml-3 absolute mt-6 ">
                                    <a href="mailto:service@hdfclife.com" className="no-underline" >
                                        {" "}
                                        <span className=" text-[26px] font-light  pl-9 text-black ">
                                            service@hdfclife.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            ref={contentRef}
                            style={{ display: "none" }}
                            className="flex mx-5"
                        >
                            <h1
                                className="text-[19px] uppercase w-[800px] text-center items-center text-white font-medium leading-loose"
                                ref={text2Ref}
                            ></h1>
                           
                        </div>
                    </div>
                    <div className='mt-5 animate fadeIn six '>
                        <button
                            className='border bg-gradient-to-r from-[#6B2D52] via-[#8A203D] to-pink-800 text-white text-lg rounded-md  px-4'
                            onClick={getChildSkip}
                        >
                            Skip
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YesContinue;
