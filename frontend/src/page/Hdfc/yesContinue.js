import React, { useEffect, useRef } from "react";
import Typed from 'typed.js';

function YesContinue() {

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
                " <a href='https://www.hdfclife.com/children-insurance-plans' style='color: red; text-transform: lowercase;'>https://www.hdfclife.com/children-insurance-plans</a>",
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
                    className="flex justify-center items-center bg-slate-400  bg-no-repeat bg-cover bg-center  h-[550px]"
                    style={{ backgroundImage: 'url(/assets/hdfc/image/Chapter2-childplan/bg-thank.jpg)' }}
                >
                    <div className="">
                        {/* Content */}
                        {/* <h1 className="text-[33px] text-white font-medium" ref={typedTextRef}> </h1> */}
                    </div>
                    {/* Content-2 */}
                    <div className="flex flex-col">
                        <h1
                            ref={text1Ref}
                            className="text-[19px] uppercase w-[860px] text-center text-white font-medium leading-loose"
                        ></h1>
                        <div ref={imageRef} style={{ display: "none" }}>
                            <div className="flex justify-center p-3 ">
                                {/* <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-20 h-20 bg-[#1457C0] text-white rounded-full p-2 outline outline-offset-2 outline-4 fadeIn"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div> */}
                                <div className="relative">
                                    <img src={'/assets/hdfc/image/Chapter2-childplan/email.png'} alt="email_image" className="w-96 " />
                                </div>
                                <div className="flex items-center ml-3 absolute mt-6 ">
                                    <a href="mailto:service@hdfclife.com" className="hover:text-blue-600">
                                        {" "}
                                        <span className=" text-[22px] font-light  pl-9 text-black ">
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
                            {/* <a href="https://www.hdfclife.com/children-insurance-plans">                   
                    <span className=" text-[22px] font-light leading-loose">
                    https://www.hdfclife.com/children-insurance-plans
                    </span>
                  </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default YesContinue;
