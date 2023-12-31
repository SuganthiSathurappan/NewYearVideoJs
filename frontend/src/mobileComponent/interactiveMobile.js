import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// initialize video.js plugins
import "videojs-landscape-fullscreen";

import { decrypt } from "../common/cryptoUtils";

import GiftMobile from './giftMobile'
import SecondVideoJs from "./secondVideoJs";

const Interactive = () => {
    const [displayForm, setDisplayForm] = useState(false);
    const [displayContactForm, setDisplayContactForm] = useState(false);
    const [isSkipped, setIsSkipped] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);
    const [displaySecVideo, setDisplaySecVideo] = useState(false);
    const [displayUnmute, setDisplayUnmute] = useState(true);
    const [displayMute, setDisplayMute] = useState(false);

    const { name } = useParams();
    console.log(name)
    // Decrypt the name
    const decryptedName = decrypt(name);
    console.log(decryptedName)



    const videoPlayerRef = useRef(null);
    const player = useRef(null);

    const spokenRef = useRef(false);

    const audioElementRef = useRef(false);

    const videoJSOptions = {
        // videoSrc: `/personalize-video/${pathName}.mp4`,
        videoSrc: 'https://new-year-video-js.vercel.app/assets/Greeting1.mp4',
        type: 'video/mp4',
        fluid: true,
        responsive: true,
        controls: true,
        userActions: { hotkeys: true },
        muted: true,
    };

    // // This useEffect using play video purpose
    useEffect(() => {

        if (!displayContent) {
            if (videoPlayerRef.current) {
                player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                    player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                    // player.current.playlist(videoJSOptions.sources);
                    player.current.controlBar.removeChild('MuteToggle');
                    // Remove the VolumePanel button
                    player.current.controlBar.removeChild('VolumePanel');

                    player.current.addClass("hide-controls");

                    console.log(videoJSOptions)

                    // configure plugins
                    player.current.landscapeFullscreen({
                        fullscreen: {
                            enterOnRotate: true,
                            exitOnRotate: true,
                            alwaysInLandscapeMode: true,
                            iOS: true
                        }
                    })

                    // setIsSkipped(true)
                    player.current.play();
                    if (player.current && !player.current.isDisposed()) {

                        // setDisplayContent(false)
                        player.current.addClass("imgToVideoFadeInAni");
                    }
                    console.log("Player Ready")

                    player.current.on("ended", () => {
                        setDisplayForm(true)
                        setIsSkipped(false)
                        setDisplayContent(false)
                        player.current.el().classList.add('hide-controls');
                        if (player.current.controlBar) {
                            player.current.controlBar.hide(); // Hide control bar
                        }
                        console.log("ended");
                        // Set thumbnail image (poster)

                    });

                });

                document.addEventListener('DOMContentLoaded', () => {
                    document.getElementById('fullscreen-toggle-btn'
                        .addEventListener('click', toggleFullScreen))
                })
            }
        }
        return () => {
            // // Clean up if needed
            if (player.current) {
                // player.current.dispose();
            }

        };

    }, [displayContent]);

    window.setTimeout(() => {
        setDisplayContent(false)
    }, 5000);


    // This useEffect using display name purpose
    useEffect(() => {
        audioElementRef.current.play()

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
            // audioElement.volume = 0.5;
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

    const handleSkip = () => {
        console.log("handleSkip")

        setDisplayForm(false)
        setDisplaySecVideo(true)
        setDisplayContactForm(true)
    };
    const handleunMuteClick = () => {
        console.log("handleunMuteClick")
        setDisplayUnmute(false)
        setDisplayMute(true)
        audioElementRef.current.pause()
    };
    const handleUnmuteClick = () => {
        console.log("handleunUnmuteClick")
        setDisplayMute(false)
        setDisplayUnmute(true)

        audioElementRef.current.play();
    };

    return (

        <div>
            <audio src="/assets/Audio_1.mp3" type="audio/mp3" ref={audioElementRef} loop>

            </audio>
            <div>
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

                {displayContent &&
                    <div class="fullscreen" id="fullscreen">
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
                        <div id="formDiv">

                            <form method="post" >
                                <div className="flex justify-center spanAnimation z-1">
                                    <span id="text-to-speech-span1" className="text-[6cqw] text-white animate-pulse
                       font-poppins">
                                        Hi
                                    </span>
                                    <span className="text-[6cqw] px-2 text-white animate-pulse
                       font-poppins" id="text-to-speech-span2"> {decryptedName} </span>
                                </div>

                                {/* <div className="overlayTitle1 z-1">
                                <span className="spanCss1" id="text-to-speech-span1">Hi, {decryptedName}</span>
                                {/* <span className="spanCss1" id="text-to-speech-span2"> </span><br /> 

                            </div> */}

                            </form>

                        </div>
                    </div>
                }

                {!displayContent && isSkipped &&
                    <div class="fullscreen" id="fullscreen">
                        <video
                            ref={videoPlayerRef}
                            className="video-js"
                        />
                    </div>
                }

                {displayForm &&
                    <div className="imgToVideoFadeInAni">
                        <GiftMobile getSkip={handleSkip} getContactForm={displayContactForm} />
                    </div>
                }
                {displaySecVideo &&
                    <div className="imgToVideoFadeInAni">
                        <SecondVideoJs getSecVideo={displaySecVideo} />
                    </div>
                }
            </div>
        </div>
    );
};

export default Interactive;
