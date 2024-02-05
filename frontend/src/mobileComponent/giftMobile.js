import React, { useState, useEffect } from "react";
import GiftVoucherForm from "./giftVoucherMobile";
import GiftCoinForm from "./giftCoinMobile";
import GiftGroceryForm from "./giftGroceryMobile";
import ContactForm from "./contactMobile";

const GiftForm = ({ getSkip, getContactForm }) => {
    const [displayContent, setDisplayContent] = useState(false)
    const [displayGiftBox, setDisplayGiftBox] = useState(false);
    const [displayGiftBoxOpen, setDisplayGiftBoxOpen] = useState(false);
    const [displayGiftBoxCheck, setDisplayGiftBoxCheck] = useState(false);
    const [displayGiftBox1, setDisplayGiftBox1] = useState(false);
    const [displayGiftBox2, setDisplayGiftBox2] = useState(false);
    const [displayGiftBox3, setDisplayGiftBox3] = useState(false);
    const [displayGiftBox4, setDisplayGiftBox4] = useState(false);
    const [displaySkip, setDisplaySkip] = useState(false)
    const [displayTry, setDisplayTry] = useState(false)

    const [displayContactForm, setDisplayContactForm] = useState(false)
-
    useEffect(() => {

        // CrakersFunction()

        if (!getContactForm) {
            setTimeout(() => {
                setDisplayContent(true);
            }, 500);
            setTimeout(() => {
                // setDisplayContent(false);
                setDisplayGiftBox(true);
            }, 2000);
        }
        else {
            setTimeout(() => {
                setDisplaySkip(false)
                setDisplayGiftBox4(false)
                setDisplayContactForm(true);
            }, 1000);
        }
        // Cleanup function
        return () => {

         
        };
    }, [getContactForm])


    const handleGiftClick = () => {
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxOpen(true)
        setDisplayGiftBoxCheck(false)
        const timer = setTimeout(() => {
            setDisplayGiftBoxCheck(true);
        }, 1000);
        // CrakersFunction()
        return () => clearTimeout(timer);

    }

    const handleGift1Click = () => {
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxOpen(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(true)
        // setDisplaySkip(true)
        // setDisplayTry(true)
    };
    const handleGift2Click = () => {
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxOpen(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(false)
        setDisplayGiftBox3(false)
        setDisplayGiftBox4(false)

        setDisplayGiftBox2(true)
        // setDisplaySkip(true)
    };
    const handleGift4Click = () => {
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxOpen(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(false)
        setDisplayGiftBox3(false)

        setDisplayGiftBox4(true)
        setDisplaySkip(true)
        // setDisplayTry(true)
    };

    const handleTry = () => {
        setDisplayTry(false)
        setDisplaySkip(false)
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(false)
        setDisplayGiftBox3(false)
        setDisplayGiftBox4(false)
        setDisplayGiftBox2(false)

        setDisplayGiftBoxOpen(true)
        const timer = setTimeout(() => {
            setDisplayGiftBoxCheck(true);
        }, 500);
        return () => clearTimeout(timer);

    };

    return (
        <>
            <div className="fullscreen font-poppins" id="fullscreen">
                <div id="formDiv">
                    <form method="post" >
                        {displayContent &&
                            <div className="flex justify-center">
                                <span className="text-[6cqw] -mt-20 text-white animate-pulse
                       font-poppins tryContentCss">
                                    Try Your Luck
                                </span>
                            </div>
                        }

                        <div className="flex justify-center ">
                            {displayGiftBox &&
                                <div className="z-1">
                                    <img alt=""
                                        src="/assets/Gift-box.png"
                                        className="cursor-pointer w-36 tryContentCss"
                                        onClick={handleGiftClick}
                                    />
                                </div>
                            }

                        </div>

                        {displayGiftBoxOpen &&
                            <div className="  animate-pulse w-36 tryContentCss">
                                <img alt="" src="/assets/gift-cover.png" className=" mb-24 " />
                                <img alt="" src="/assets/gift-bottom.png" className=" " />
                            </div>
                        }
                        {displayGiftBoxCheck &&
                            <div className=" flex justify-center z-1 w-36 minigiftBoxCss animate-fade-up smallboxesCssMobile">
                                <img alt="" src="/assets/small-gift1.png"
                                    className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                                    onClick={handleGift1Click}
                                />
                                <img alt="" src="/assets/small-gift2.png"
                                    className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                                    onClick={handleGift2Click}
                                />

                                <img alt="" src="/assets/small-gift4.png"
                                    className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                                    onClick={handleGift4Click}
                                />
                            </div>
                        }
                        {displayGiftBox1 &&
                            <GiftVoucherForm handleTryOff={handleTry} />
                        }
                        {displayGiftBox2 &&
                            <GiftCoinForm handleTryOff={handleTry} />
                        }
                        {displayGiftBox4 &&
                            <GiftGroceryForm handleTryOff={handleTry} />
                        }

                    </form>
                    {displaySkip &&
                        <div className="text-lg z-1 custom-skip-button-div right-0 ">
                            <button
                                className="px-2 custom-skip-buttonMobile border-2 border-[#172936] text-[20px] text-white rounded-lg bg-[#e78b08]"
                                onClick={getSkip}>

                                Skip
                            </button>
                        </div>
                    }
                    {displayContactForm &&
                        <ContactForm />
                    }
                </div>

            </div>

        </>
    );
};
export default GiftForm;