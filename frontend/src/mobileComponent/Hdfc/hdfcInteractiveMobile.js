import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

// initialize video.js plugins
import "videojs-landscape-fullscreen";

import { decrypt } from "../../common/cryptoUtils";

import InsurancePolicyForm from '../../page/Hdfc/insurancePolicyForm'

const HdfcInteractiveMobile = () => {
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


    const audioElementRef = useRef(false);
    const videoPlayerRef = useRef(null);
    const player = useRef(null);

    const spokenRef = useRef(false);



    const videoJSOptions = {
        // videoSrc: `/personalize-video/${pathName}.mp4`,
        // videoSrc: '/assets/hdfc/video/Chapter1-Video1_1.mp4',
        sources: [
            { src: '/assets/hdfc/video/Chapter-1/Video1_1.mp4', type: 'video/mp4' },
        ],
        fluid: true,
        responsive: true,
        controls: true,
        userActions: { hotkeys: true },
        muted: false,
    };

    // // This useEffect using play video purpose
    useEffect(() => {

        if (!displayContent) {
            if (videoPlayerRef.current) {
                player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                    // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                    player.current.playlist(videoJSOptions.sources);
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
                    // if (player.current && !player.current.isDisposed()) {

                    //     setDisplayContent(false)
                    //     player.current.addClass("imgToVideoFadeInAni");
                    // }
                    // Check if the player is not disposed before calling play()
                    if (player.current && !player.current.isDisposed()) {
                        player.current.addClass("imgToVideoFadeInAni");
                        // player.current.play();
                        window.setTimeout(() => {
                            // Check if the player is not disposed before pausing
                            if (player.current && !player.current.isDisposed()) {
                                player.current.pause();
                                // Add background audio
                                audioElementRef.current.play()
                                setDisplayForm(true)
                            }
                        }, 13100); // Pause the player after 10 seconds
                    }



                    console.log("Player Ready")

                    player.current.on("ended", () => {
                        // setDisplayForm(true)
                        // setDisplayMute(false)
                        // setIsSkipped(false)
                        // setDisplayContent(false)
                        // player.current.el().classList.add('hide-controls');
                        // if (player.current.controlBar) {
                        //     player.current.controlBar.hide(); // Hide control bar
                        // }
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

        // setDisplayForm(false)
        // setDisplaySecVideo(true)
        // setDisplayContactForm(true)
        // Check if the player is not disposed before taking any actions
        if (player.current && !player.current.isDisposed()) {
            // Hide the form and show controls if needed
            setDisplayForm(false);
            player.current.tech().el().style.opacity = '1';
            player.current.el().classList.remove('hide-controls');

            // Resume playback
            player.current.play();
        }
    };


    const handleChildPlan1 = () => {
        // Check if the player is not disposed before updating the playlist
        if (player.current && !player.current.isDisposed()) {
            setDisplayForm(false)
            player.current.src([
                { src: '/assets/hdfc/video/ChildPlan/Child_Plan1.mp4', type: 'video/mp4' },
            ]);


            // Play the video
            player.current.play();

            player.current.one("ended", () => {
                // Set displayForm to false after the second video ends

                setTimeout(() => {
                    audioElementRef.current.pause();
                    setDisplayForm(false);
                    console.log("ended");
                }, 100); // Adjust the duration as needed
            });


            // Log the current item index after a short delay
            setTimeout(() => {
                console.log(player.current.playlist.currentItem()); // Log the current item index
            }, 100);
        }
    };

    return (

        <div>
            <audio src="/assets/hdfc/video/Chapter-1/Audio1_2.mp3" type="audio/mp3" ref={audioElementRef}>

            </audio>

            <div >
                {displayContent &&
                    <div class="fullscreen" id="fullscreen" style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}>

                        <div id="formDiv">

                            <form method="post" >
                                <div className="flex justify-center spanAnimation z-1">
                                    <span id="text-to-speech-span1" className="text-[6cqw] text-black animate-pulse
                       font-poppins">
                                        Hello
                                    </span>
                                    <span className="text-[6cqw] px-2 text-black animate-pulse
                       font-poppins" id="text-to-speech-span2"> {decryptedName} </span>
                                </div>
                            </form>

                        </div>
                    </div>
                }

                {!displayContent && isSkipped &&
                    <div class="fullscreen" id="fullscreen" style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}>
                        <video
                            ref={videoPlayerRef}
                            className="video-js"
                        />
                    </div>
                }

                {displayForm &&
                    <div className="imgToVideoFadeInAni">
                        <InsurancePolicyForm getSkip={handleSkip} getChildPlan={handleChildPlan1} />
                    </div>
                }

            </div>
        </div>
    );
};

export default HdfcInteractiveMobile;
