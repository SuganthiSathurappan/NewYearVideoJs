import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";


function Thankyou() {
    // Refs for the Typed.js instances
    const thankYouRef = useRef(null);
    const contactUsRef = useRef(null);
    const reachingOutRef = useRef(null); // New ref for typing animation
    const imageRefs = useRef([useRef(null), useRef(null), useRef(null)]);
    const contentRefs = useRef([useRef(null), useRef(null), useRef(null)]);

    const [showContacts, setShowContacts] = useState(false);

    useEffect(() => {
        // Typed.js options for "THANK YOU" animation
        const thankYouOptions = {
            strings: ["THANK YOU"],
            typeSpeed: 80,
            showCursor: false,
            onComplete: () => {
                animateText2();
            },
        };

        // Initialize Typed instances
        const thankYouTyped = new Typed(thankYouRef.current, thankYouOptions);

        // Clean up function to destroy Typed instances
        return () => {
            thankYouTyped.destroy();
        };
    }, []);

    const animateText2 = () => {
        // Typed.js options for "For Reaching Out to Us. We Are Always Happy To Help You" animation
        const reachingOutOptions = {
            strings: ["For Reaching Out to Us.<br/>We Are Always Happy To Help You"],
            typeSpeed: 60,
            backSpeed: 40,
            loop: false,
            showCursor: false, // Hiding the cursor
            onComplete: () => {
                // Start the next animation after reachingOutOptions completes
                animateText3();
            },
        };
        const reachingOutTyped = new Typed(
            reachingOutRef.current,
            reachingOutOptions
        );
    };

    const animateText3 = () => {
        // Typed.js options for "If You Have Any Other Queries,Please Contact us At" animation
        const contactUsOptions = {
            strings: ["If You Have Any Other Queries, Please Contact Us At"],
            typeSpeed: 80,
            showCursor: false,
        };
        const contactUsTyped = new Typed(contactUsRef.current, contactUsOptions);

        // Using setTimeout to delay setting showContacts to true
        setTimeout(() => {
            setShowContacts(true);
        }, 5510); // 4 seconds delay
    };

    return (
        <>
            <div className="image-container policyFormCss ">
                <div className="flex flex-col justify-center items-center bg-[#6FB3F2] md:h-[550px] lg:h-[550px]">
                    {/* Content-1 */}
                    <div className="">
                        <h1
                            ref={thankYouRef}
                            className="text-[53px] font-semibold text-white text-center"
                        ></h1>

                        <p
                            ref={reachingOutRef}
                            className="uppercase text-[25px]  text-center text-white font-thin leading-snug"
                        ></p>
                    </div>
                    {/* Content-2*/}
                    <div className="my-8">
                        <h1
                            ref={contactUsRef}
                            className="text-[27px] text-center font-medium outline-white text-white uppercase stroke-white stroke-1"
                        ></h1>
                        {/* Images */}
                        <div className="flex flex-wrap justify-center    md:justify-evenly my-12 md:space-x-4">
                            {showContacts && (
                                <>
                                    <div className="flex justify-center ">
                                        <div className="relative" ref={imageRefs.current[0]}>
                                            <img src={'/assets/hdfc/image/Chapter2-childplan/email.png'} alt="email" className="w-60 " />
                                        </div>
                                        <div
                                            className="flex items-center ml-3 absolute mt-3"
                                            ref={contentRefs.current[0]}
                                        >
                                            <a href="mailto:service@hdfclife.com" className="no-underline">
                                                <span className="text-[18px] font-light pl-9 text-black">
                                                    service@hdfclife.com
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative" ref={imageRefs.current[1]}>
                                            <img src={'/assets/hdfc/image/Chapter2-childplan/phone.png'} alt="phone" className="w-60 " />
                                        </div>
                                        <div
                                            className="flex items-center ml-3 absolute mt-3"
                                            ref={contentRefs.current[1]}
                                        >
                                            <span className="text-[20px] font-light pl-9">
                                                022-68446530
                                            </span>

                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <div className="relative" ref={imageRefs.current[2]}>
                                            <img src={'/assets/hdfc/image/Chapter2-childplan/sms.png'} alt="sms" className="w-60 " />
                                        </div>
                                        <div
                                            className="flex items-center ml-3 absolute mt-3"
                                            ref={contentRefs.current[2]}
                                        >
                                            <span className="text-[20px] font-light pl-9">
                                                +91 8291890569
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Thankyou;
