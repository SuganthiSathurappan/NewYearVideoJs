import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import 'videojs-playlist';
import { useMediaQuery } from 'react-responsive';

import { decrypt } from "../common/cryptoUtils";

import InsurancePolicyForm from '../page/Hdfc/insurancePolicyForm'
// import '../responsiveStyle.css';


const MainVideoPlayer = () => {
    const videoPlayerRef = useRef(null);
    const { name } = useParams();
    const [displayForm, setDisplayForm] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);

    const [displayUnmute, setDisplayUnmute] = useState(true);
    const [displayMute, setDisplayMute] = useState(false);


    const isMobile = useMediaQuery({ maxWidth: 480 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    const spokenRef = useRef(false);
    const player = useRef(null);
    const audioElementRef = useRef(false);

    console.log(name)
    // Decrypt the name
    const decryptedName = decrypt(name);
    console.log(decryptedName)



    const videoJSOptions = {
        sources: [
            { src: '/assets/hdfc/video/Chapter1-Video.mp4', type: 'video/mp4' },
        ],
        controls: true,
        fluid: true,
        responsive: true,
        userActions: { hotkeys: true },
        muted: false,
    };

    useEffect(() => {

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

        }

        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                player.current.playlist(videoJSOptions.sources);
                setDisplayForm(false)
                // player.current.playlist(videoJSOptions.sources);
                player.current.controlBar.removeChild('MuteToggle');
                // Remove the VolumePanel button
                player.current.controlBar.removeChild('VolumePanel');

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

        };

    }, [name]);


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


    const handleunMuteClick = () => {
        console.log("handleunMuteClick")
        setDisplayUnmute(false)
        setDisplayMute(true)

    };
    const handleUnmuteClick = () => {
        console.log("handleunUnmuteClick")
        setDisplayMute(false)
        setDisplayUnmute(true)


    };

    return (
        <div>


            <div id="overlay" className="flex mt-2 items-center  text-blue-700 font-semibold text-2xl justify-center">
                {/* Customized Interactive Video Player */}
            </div>
            <div className={`video-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
                <video
                    ref={videoPlayerRef}
                    className="video-js"
                />
            </div>
            <div className={`video-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
                {displayUnmute &&
                    <img alt="" src="/assets/unmute.png"
                        className=" cursor-pointer mx-3 top-2 absolute z-1 p-2 right-0 w-9 rounded-full border-2 border-black
                                    transition duration-300 ease-in-out hover:border-white hover:w-10"
                        onClick={handleunMuteClick}
                    />
                }
                {displayMute &&
                    <img alt="" src="/assets/mute.png"
                        className=" cursor-pointer mx-3 top-2 absolute z-1 p-2 right-0 w-9 rounded-full border-2 border-black
                                    transition duration-300 ease-in-out hover:border-white hover:w-10"
                        onClick={handleUnmuteClick}
                    />
                }

            </div>
            <div className={`video-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
                <div>
                    {displayImg &&
                        <div className="image-container">
                            <div className="muteCss">
                                {displayUnmute &&
                                    <img alt="" src="/assets/unmute.png"
                                        className=" cursor-pointer mx-3 top-2 absolute z-1 p-2 right-0 w-9 rounded-full border-2 border-black
                                    transition duration-300 ease-in-out hover:border-white hover:w-10"
                                        onClick={handleunMuteClick}
                                    />
                                }
                                {displayMute &&
                                    <img alt="" src="/assets/mute.png"
                                        className=" cursor-pointer mx-3 top-2 absolute z-1 p-2 right-0 w-9 rounded-full border-2 border-black
                                    transition duration-300 ease-in-out hover:border-white hover:w-10"
                                        onClick={handleUnmuteClick}
                                    />
                                }
                            </div>

                            <img alt="" src="/assets/hdfc/image/bg-insurance.jpg" />
                        </div>
                    }

                </div>
                {displayContent &&
                    <div className="overlayTitle1 " >
                        <span className="spanCss1 text-black" id="text-to-speech-span1">Hello</span>
                        <span className="spanCss1 text-black" id="text-to-speech-span2"> {decryptedName} </span><br />
                    </div>
                }
                <div id="wrapper">
                    {displayForm &&
                        <>

                            <div id="overlay" className="videoFadeInAni">

                                <InsurancePolicyForm />
                            </div>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default MainVideoPlayer;
