import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import 'videojs-playlist';
import { useMediaQuery } from 'react-responsive'

import Gift from '../page/gift'
import ContactForm from "../page/contactForm";
import { decrypt } from "../common/cryptoUtils";



const VideoPlayer = () => {
    const videoPlayerRef = useRef(null);
    const { name } = useParams();
    const [displayForm, setDisplayForm] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);
    const [displayContactForm, setDisplayContactForm] = useState(false);

    const [displayVideo, setDisplayVideo] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    const spokenRef = useRef(false);
    const player = useRef(null);


    console.log(name)
    // Decrypt the name
    const decryptedName = decrypt(name);
    console.log(decryptedName)



    const videoJSOptions = {
        sources: [
            { src: '/assets/Greeting1.mp4', type: 'video/mp4' },
            { src: '/assets/Greeting2.mp4', type: 'video/mp4' },
        ],
        controls: true,
        fluid: true,
        responsive: true,
        userActions: { hotkeys: true },
        // muted: true,       
    };

    useEffect(() => {
        CrakersFunction()
        const audioElement = document.createElement('audio');
        audioElement.src = '/assets/Audio_1.mp3';
        audioElement.loop = true;
        audioElement.play();

        const textToAudio = (spanContent) => {
            let speech = new SpeechSynthesisUtterance();
            speech.lang = 'en-US';
            speech.text = spanContent;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;
            // Check if speech synthesis is already speaking, and cancel it if necessary
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
            }
            window.speechSynthesis.speak(speech);

        };

        if (!spokenRef.current) {
            let spanContent = document.getElementById('text-to-speech-span1').innerText;
            console.log(spanContent)
            textToAudio(`${spanContent + decryptedName} `);
            // Set the volume to 0.5 (50%)
            audioElement.volume = 0.5;
        }

        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                player.current.playlist(videoJSOptions.sources);
                setDisplayForm(false)
                // Add custom style to hide controls
                player.current.addClass("hide-controls");

                console.log(videoJSOptions)


                player.current.on("ended", () => {
                    // player.current.src({ src: '/assets/Gift-bg.jpg', type: 'image/jpg' });
                    // Add background audio

                    setDisplayForm(true)
                    player.current.el().classList.add('hide-controls');
                    if (player.current.controlBar) {
                        player.current.controlBar.hide(); // Hide control bar
                    }
                    console.log("ended");
                    // Set thumbnail image (poster)

                });

                // Set a timer to start playing the video after 4 seconds
                window.setTimeout(() => {
                    // Set the volume to 0.5 (50%)
                    audioElement.volume = 0.6;
                    // Check if the player is not disposed before calling play()
                    if (player.current && !player.current.isDisposed()) {
                        player.current.addClass("videoFadeInAni");
                        player.current.play();
                        setDisplayContent(false)
                        setDisplayImg(false)
                    }
                }, 5000);
                console.log("Player Ready")
            });

            document.addEventListener('DOMContentLoaded', () => {
                document.getElementById('fullscreen-toggle-btn'
                    .addEventListener('click', toggleFullScreen))
            })
        }
        return () => {
            // // Clean up if needed
            if (player.current) {
                // player.current.dispose();
            }
            if (audioElement) {
                audioElement.pause();
                audioElement.remove();
            }
        };

    }, [name]);

    const handleSkip = () => {
        // Check if the player is not disposed before updating the playlist
        if (player.current && !player.current.isDisposed()) {
            setDisplayForm(false)
            player.current.src([
                { src: '/assets/Greeting2.mp4', type: 'video/mp4' },
            ]);
            setDisplayContactForm(true)

            // Play the video
            player.current.play();

            player.current.one("ended", () => {
                // Set displayForm to false after the second video ends

                setDisplayForm(true);
                console.log(setDisplayContactForm)
            });


            // Log the current item index after a short delay
            setTimeout(() => {
                console.log(player.current.playlist.currentItem()); // Log the current item index
            }, 100);
        }
    };

    const toggleFullScreen = async () => {
        const container = document.getElementById('wrapper');
        const fullscreenApi = container.requestFullscreen
            || container.webkitRequestFullScreen
            || container.mozRequestFullScreen
            || container.msRequestFullscreen;
        if (!document.fullscreenElement) {
            fullscreenApi.call(container);
        }
        else {
            document.exitFullscreen();
        }
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
        <div>

            <div id="overlay" className="flex mt-2 items-center  text-blue-700 font-semibold text-2xl justify-center">
                Customized Interactive Video Player
            </div>
            <div className={`video-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
                <video
                    ref={videoPlayerRef}
                    className="video-js"
                />
            </div>
            <div className={`video-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
                <div>
                    {displayImg &&
                        <div className="image-container">
                            <canvas id="canvas" className="canvasCss"></canvas>
                            <img alt="" src="/assets/video-bg.jpg" />
                        </div>
                    }
                    {/* <video ref={videoPlayerRef} className="video-js" /> */}
                </div>
                {displayContent &&
                    <div className="overlayTitle1 " >
                        <span className="spanCss1" id="text-to-speech-span1">Hi,</span>
                        <span className="spanCss1" id="text-to-speech-span2"> {decryptedName}</span><br />
                    </div>
                }

                <div id="wrapper">
                    {displayForm &&
                        <div id="overlay" className="videoFadeInAni">
                            <Gift getSkip={handleSkip} getContactForm={displayContactForm} />
                        </div>
                    }
                </div>

            </div>


            {/* <div data-vjs-player onClick={handleClick} >
                {displayImg &&
                    <div className="container1">
                        <canvas id="canvas" className="canvasCss" >
                        </canvas>
                        <img alt="" src="/assets/video-bg.jpg" className="w-full h-full  ">
                        </img>
                    </div>
                }
                <video
                    ref={videoPlayerRef}
                    className="video-js"
                />
                <div id="wrapper">
                    {displayForm &&
                        <div id="overlay" className="videoFadeInAni">
                            <Gift getSkip={handleSkip} getContactForm={displayContactForm} />
                        </div>
                    }
                </div>

                {displayContent &&
                    <div className="overlayTitle1 common" >
                        <span className="spanCss1" id="text-to-speech-span1">Hi,</span>
                        <span className="spanCss1" id="text-to-speech-span2"> {decryptedName}</span><br />
                        {/* <span className="spanCss2">Welcome </span>
                            <span className="spanCss2"> to </span>
                            <span className="spanCss2"> you </span> */}
            {/* </div>
                }
            </div> */}

        </div>
    );
};

export default VideoPlayer;
