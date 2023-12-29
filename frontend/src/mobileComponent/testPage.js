
import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import 'videojs-playlist';

import { decrypt } from "../common/cryptoUtils";
import GiftMobile from './giftMobile'

// import '../App.css';
const Login = () => {

    const [displayForm, setDisplayForm] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);
    const [displayContactForm, setDisplayContactForm] = useState(false);

    const videoPlayerRef = useRef(null);
    const { name } = useParams();

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
        if (!displayContent) {
            if (videoPlayerRef.current) {
                player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                    // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                    player.current.playlist(videoJSOptions.sources);

                    // Add custom style to hide controls
                    // player.current.addClass("hide-controls");
                    // player.current.play();
                    console.log(videoJSOptions)

                    // // Check if the player is not disposed before calling play()
                    // if (player.current && !player.current.isDisposed()) {
                    //     // player.current.addClass("videoFadeInAni");

                    //     setDisplayContent(false)
                    // }

                    player.current.on("ended", () => {
                        setDisplayImg(false)
                        setDisplayContent(false)
                        setDisplayForm(true)
                        player.current.el().classList.add('hide-controls');
                        if (player.current.controlBar) {
                            player.current.controlBar.hide(); // Hide control bar
                        }
                        console.log("ended");

                    });

                    // Set a timer to start playing the video after 4 seconds
                    setDisplayImg(true)
                    // Set the volume to 0.5 (50%)
                    // Check if the player is not disposed before calling play()
                    if (player.current && !player.current.isDisposed()) {
                        player.current.addClass("videoFadeInAni");
                        player.current.play();
                        setDisplayContent(false)

                    }
                    console.log("Player Ready")

                    // console.log("Player Ready")
                });
            }
        }
    }, [displayContent])

    window.setTimeout(() => {
        setDisplayContent(false)
    }, 5000);


    useEffect(() => {

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

        console.log("out side displayImg", displayImg)

        //   console.log(videoPlayerRef.current)
        // if (videoPlayerRef.current) {
        //     player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
        //         // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
        //         player.current.playlist(videoJSOptions.sources);

        //         // Add custom style to hide controls
        //         player.current.addClass("hide-controls");
        //         // player.current.play();
        //         console.log(videoJSOptions)

        //         audioElement.volume = 0.6;
        //         // // Check if the player is not disposed before calling play()
        //         // if (player.current && !player.current.isDisposed()) {
        //         //     // player.current.addClass("videoFadeInAni");

        //         //     setDisplayContent(false)
        //         // }

        //         player.current.on("ended", () => {
        //             setDisplayImg(false)
        //             setDisplayContent(false)
        //             setDisplayForm(true)
        //             player.current.el().classList.add('hide-controls');
        //             if (player.current.controlBar) {
        //                 player.current.controlBar.hide(); // Hide control bar
        //             }
        //             console.log("ended");

        //         });

        //         // Set a timer to start playing the video after 4 seconds
        //         window.setTimeout(() => {
        //             console.log(displayImg)
        //             setDisplayImg(true)
        //             // Set the volume to 0.5 (50%)
        //             audioElement.volume = 0.6;
        //             // Check if the player is not disposed before calling play()
        //             if (player.current && !player.current.isDisposed()) {
        //                 player.current.addClass("videoFadeInAni");
        //                 player.current.play();
        //                 setDisplayContent(false)

        //             }
        //         }, 5000);
        //         console.log("Player Ready")

        //         // console.log("Player Ready")
        //     });

        //     document.addEventListener('DOMContentLoaded', () => {
        //         document.getElementById('fullscreen-toggle-btn'
        //             .addEventListener('click', toggleFullScreen))
        //     })
        // }
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

    return (
        <>
            {displayContent &&
                <div class="fullscreen" id="fullscreen">
                    <div id="formDiv">
                        <form method="post" >
                            <div className="flex justify-center">
                                <span id="text-to-speech-span1" className="text-[6cqw] text-white animate-pulse
                       font-poppins">
                                    Hi, {decryptedName}
                                </span>
                            </div>
                            {/* <div className="overlayTitle1 z-1">
                                <span className="spanCss1" id="text-to-speech-span1">Hi, {decryptedName}</span>
                                {/* <span className="spanCss1" id="text-to-speech-span2"> </span><br /> 

                            </div> */}

                        </form>

                    </div>
                </div>
            }
            {!displayContent && displayImg &&
                <div class="fullscreen" id="fullscreen">
                    <video
                        ref={videoPlayerRef}
                        className="video-js"
                    />
                </div>
            }
            {displayForm &&
                <div >
                    <GiftMobile getSkip={handleSkip} getContactForm={displayContactForm} />
                </div>
            }

        </>
    );
};

export default Login;
