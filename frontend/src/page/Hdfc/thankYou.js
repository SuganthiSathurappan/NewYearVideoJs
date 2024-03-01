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
        setTimeout(() => {
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
        }, 1000);
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

    const handleWhatsAppClick = (event) => {
        event.preventDefault();
        // Replace with the desired mobile number
        const mobileNumber = '+919962755155';
        // Construct the WhatsApp link
        const whatsappLink = `https://wa.me/${mobileNumber}`;
        // Open WhatsApp in a new tab
        window.open(whatsappLink, '_blank');
    };

    return (
        < div className="w-full">
            <div className="image-container  bg-cover bg-center policyFormCss " style={{ backgroundImage: 'url(/assets/hdfc/image/Chapter2-childplan/bg-thank.jpg)' }}>
                <div className='lg:mt-16'>
                    <div className='relative '>
                        <div className="flex flex-col justify-center items-center">
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
                                <div >
                                    {showContacts && (
                                        <div className="flex flex-col flex-wrap justify-center my-12 md:space-x-4 animate fadeIn two">
                                            <div className="flex justify-evenly">
                                                <div className="flex ">
                                                    <div className="relative" ref={imageRefs.current[0]}>
                                                        <img src={'/assets/hdfc/image/Chapter2-childplan/email.png'} alt="email" className="w-64 " />
                                                    </div>
                                                    <div
                                                        className="flex items-center ml-3 absolute mt-3"
                                                        ref={contentRefs.current[0]}
                                                    >
                                                        <a href="mailto:service@hdfclife.com" className="no-underline">
                                                            <span className="text-[18px] font-light pl-14 text-black">
                                                                service@hdfclife.com
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="relative" ref={imageRefs.current[1]}>
                                                        <img src={'/assets/hdfc/image/Chapter2-childplan/phone.png'} alt="phone" className="w-64 " />
                                                    </div>
                                                    <div
                                                        className="flex items-center ml-3 absolute mt-3"
                                                        ref={contentRefs.current[1]}
                                                    >
                                                        <a href="tel:022-68446530" className="no-underline">
                                                            <span className="text-[20px] font-light pl-14 text-black">
                                                                022-68446530
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex justify-between">
                                                <div className="flex ">
                                                    <div className="relative" ref={imageRefs.current[2]}>
                                                        <img src={'/assets/hdfc/image/Chapter2-childplan/sms.png'} alt="sms" className="w-60 " />
                                                    </div>
                                                    <div
                                                        className="flex items-center ml-3 absolute mt-3"
                                                        ref={contentRefs.current[2]}
                                                    >
                                                        <a href="tel:+91 8291890569" className="no-underline">
                                                            <span className="text-[20px] font-light pl-12 cursor-pointer text-black">
                                                                +91 8291890569
                                                            </span></a>
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="relative" ref={imageRefs.current[2]}>
                                                        <img src={'/assets/hdfc/image/Chapter2-childplan/whats-app.png'} alt="sms" className="w-60 " />
                                                    </div>
                                                    <div
                                                        className="flex items-center ml-3 absolute mt-3"
                                                        ref={contentRefs.current[2]}
                                                    >
                                                        <a href="#" onClick={handleWhatsAppClick} className="no-underline">
                                                            <span className="text-[20px] font-light pl-12 text-black">
                                                                +91 9962755155
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thankyou;
