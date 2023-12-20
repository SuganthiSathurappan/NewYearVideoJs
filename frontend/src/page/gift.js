import React, { useState, useEffect } from "react";
import UserDetailsForm from './gift1Form'
import ContactForm from "./contactForm";
import GiftVoucherForm from "./giftVoucherForm"

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

    useEffect(() => {

        CrakersFunction()

        if (!getContactForm) {
            setTimeout(() => {
                setDisplayContent(true);
            }, 1000);
            setTimeout(() => {
                // setDisplayContent(false);
                setDisplayGiftBox(true);
            }, 2000);
        }
        else {
            setTimeout(() => {
                setDisplayContactForm(true);
            }, 1000);
        }
        // Cleanup function
        return () => {

            // Pause and remove the audio element
            // if (audioElement) {
            //     audioElement.pause();
            //     audioElement.remove();
            // }
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
        CrakersFunction()
        return () => clearTimeout(timer);

    };

    const handleGift1Click = () => {
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxOpen(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(true)
        // setDisplaySkip(true)
        // setDisplayTry(true)
    };
    const handleGift3Click = () => {
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxOpen(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(false)

        setDisplayGiftBox3(true)
        // setDisplaySkip(true)
        setDisplayTry(true)
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
        setDisplayTry(true)
    };

    const handleSkip = () => {
        setDisplaySkip(false)
        setDisplayContent(false)
        setDisplayGiftBox(false)
        setDisplayGiftBoxCheck(false)
        setDisplayGiftBox1(false)
        setDisplayGiftBox3(false)
        setDisplayGiftBox4(false)
        setDisplayGiftBox2(false)
        setDisplayGiftBoxOpen(false)
        setDisplayTry(false)

        setDisplayContactForm(true)
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

    const CrakersFunction = () => {
        let canvas, ctx, w, h, particles = [], probability = 0.04,
            xPoint, yPoint;

        const resizeCanvas = () => {
            if (!!canvas) {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
            }
        };

        const updateWorld = () => {
            update();
            paint();
            window.requestAnimationFrame(updateWorld);
        };

        const update = () => {
            if (particles.length < 500 && Math.random() < probability) {
                createFirework();
            }
            var alive = [];
            for (var i = 0; i < particles.length; i++) {
                if (particles[i].move()) {
                    alive.push(particles[i]);
                }
            }
            particles = alive;
        };

        const paint = () => {
            ctx.clearRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';
            for (var i = 0; i < particles.length; i++) {
                particles[i].draw(ctx);
            }
        };

        const createFirework = () => {
            xPoint = Math.random() * (w - 200) + 100;
            yPoint = Math.random() * (h - 200) + 100;
            var nFire = Math.random() * 50 + 100;
            var c =
                "rgb(" +
                (~~(Math.random() * 200 + 55)) +
                "," +
                (~~(Math.random() * 200 + 55)) +
                "," +
                (~~(Math.random() * 200 + 55)) +
                ")";
            for (var i = 0; i < nFire; i++) {
                var particle = new Particle();
                particle.color = c;
                var vy = Math.sqrt(25 - particle.vx * particle.vx);
                if (Math.abs(particle.vy) > vy) {
                    particle.vy = particle.vy > 0 ? vy : -vy;
                }
                particles.push(particle);
            }
        };

        function Particle() {
            this.w = this.h = Math.random() * 4 + 1;

            this.x = xPoint - this.w / 2;
            this.y = yPoint - this.h / 2;

            this.vx = (Math.random() - 0.5) * 10;
            this.vy = (Math.random() - 0.5) * 10;

            this.alpha = Math.random() * 0.5 + 0.5;

            this.color = '';
        };

        Particle.prototype = {
            gravity: 0.05,
            move: function () {
                this.x += this.vx;
                this.vy += this.gravity;
                this.y += this.vy;
                this.alpha -= 0.01;
                if (
                    this.x <= -this.w ||
                    this.x >= window.innerWidth ||
                    this.y >= window.innerHeight ||
                    this.alpha <= 0
                ) {
                    return false;
                }
                return true;
            },
            draw: function (c) {
                c.save();
                c.beginPath();

                c.translate(this.x + this.w / 2, this.y + this.h / 2);
                c.arc(0, 0, this.w, 0, Math.PI * 2);
                c.fillStyle = this.color;
                c.globalAlpha = this.alpha;

                c.closePath();
                c.fill();
                c.restore();
            },
        };

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");
        resizeCanvas();

        window.requestAnimationFrame(updateWorld);

        // Cleanup function
        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }

    return (
        <div className=" font-poppins  container1 ">
            <canvas id="canvas" className="canvasCss" >
            </canvas>
            <img alt="" src="/assets/video-bg.jpg" className="w-full h-full ">
            </img>

            {displayContent &&
                <div className="">
                    {/* <span className="font-sans text-[4cqw]">
                        Surprise Gift to you
                    </span>

                    <span className="text-[3cqw] mt-4">
                        <br /> Check your luck
                    </span> */}
                    <span className="font-sans text-[4cqw] top-10 animate-pulse giftBoxCss">
                        Try Your Luck
                    </span>
                </div>
            }

            <div className="flex justify-center">
                {displayGiftBox &&
                    <div className="w-44 absolute top-0  ">
                        <img alt=""
                            src="/assets/Gift-box.png"
                            className="cursor-pointer mt-44 giftBoxCss"
                            onClick={handleGiftClick}
                        />
                    </div>
                }
                {displayGiftBoxOpen &&
                    <div className="w-52 md:w-64  absolute top-0 animate-pulse ">
                        <img alt="" src="/assets/gift-cover.png" className=" cursor-pointer mt-16" />
                        <img alt="" src="/assets/gift-bottom.png" className=" cursor-pointer mt-32" />
                    </div>
                }
                {displayGiftBoxCheck &&
                    <div className="w-16 md:w-28 flex justify-center absolute top-40 giftopenCss animate-fade-up">
                        <img alt="" src="/assets/small-gift1.png"
                            className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                            onClick={handleGift1Click}
                        />
                        <img alt="" src="/assets/small-gift2.png"
                            className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                            onClick={handleGift2Click}
                        />
                        <img alt="" src="/assets/small-gift3.png"
                            className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                            onClick={handleGift3Click}
                        />
                        <img alt="" src="/assets/small-gift4.png"
                            className=" cursor-pointer mx-3  transition duration-300 ease-in-out hover:scale-110 hover:animate-bounce"
                            onClick={handleGift4Click}
                        />
                    </div>
                }
                {displayTry &&
                    <div className="absolute bottom-3 py-2 justify-center">
                        <a href
                            className="w-auto p-1.5 font-semibold border-4  border-[#e78b08] text-[20px]  text-deep-purple-900  rounded-xl bg-[#dfcb18] text-center
                               cursor-pointer no-underline focus:shadow-outline focus:outline-none"
                            onClick={handleTry}
                        >
                            Try Your Luck Again
                        </a>
                    </div>
                }

            </div>


            <div className={`gift-form common`}>


            </div>
            {/* {displayGiftBox1 &&
                <div className=" gift1Css
                     transition duration-300 ease-in-out hover:scale-110 ">
                    <img alt=""
                        src="/assets/greeting.png"
                        className="w-full"
                    />
                </div>
            } */}

            {displayGiftBox1 &&
                <GiftVoucherForm handleTryOff={handleTry} />
            }
            {displayGiftBox2 &&
                <UserDetailsForm handleTryOff={handleTry} />
            }

            {displayGiftBox3 &&

                <div className="gift3Css transition duration-300 ease-in-out hover:scale-110 ">
                    <img alt=""
                        src="/assets/gift-voucher1.png"
                        className="w-full"
                    />
                </div>
            }
            {displayGiftBox4 &&

                <div className="gift4Css transition duration-300 ease-in-out hover:scale-110 ">
                    <img alt=""
                        src="/assets/gift-voucher2.png"
                        className="w-full"
                    />
                </div>
            }

            {displayContactForm &&
                <ContactForm />
            }
            {displaySkip &&
                <div className="text-xl  custom-skip-button  ">
                    <button
                        className="py-1 px-4 "
                        onClick={getSkip}>
                        Skip
                    </button>
                </div>
            }

            {/* </canvas> */}
        </div>
    );
};
export default GiftForm;