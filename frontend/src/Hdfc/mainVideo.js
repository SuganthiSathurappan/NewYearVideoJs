import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import 'videojs-playlist';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';

import { decrypt } from "../common/cryptoUtils";

import InsurancePolicyForm from '../page/Hdfc/insurancePolicyForm'
import ChildPlan from "../page/Hdfc/childPlan";
import ChildExplore from "../page/Hdfc/childExplore"
// import '../responsiveStyle.css';
import { handlePostRequest, playAudio } from "../app/api/textToSpeechApi";

const MainVideoPlayer = () => {
    const videoPlayerRef = useRef(null);
    const { name } = useParams();
    const [displayForm, setDisplayForm] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);
    const [displayChildPlanForm, setDisplayChildPlanForm] = useState(false);
    const [displayExploreForm, setDisplayExpolreForm] = useState(false);

    const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
    const [source, setSource] = useState(null);

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
            { src: '/assets/hdfc/video/Chapter-1/Video1_1.mp4', type: 'video/mp4' },
        ],
        controls: true,
        fluid: true,
        responsive: true,
        userActions: { hotkeys: true },
        muted: false,
    };


    useEffect(() => {

        if (!spokenRef.current) {
            let spanContent = document.getElementById('text-to-speech-span1').innerText;
            console.log(spanContent)
            // textToAudio(`${spanContent + decryptedName} `);
            // let spanContent = document.getElementById('text-to-speech-span1').innerText;
            // Call handlePostRequest from the imported api.js file
            handlePostRequest(`${spanContent + decryptedName} `, (audioData) => {
                playAudio(audioData, audioContext, setAudioContext, setSource);
            });
        }

        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });

                player.current.playlist(videoJSOptions.sources);
                setDisplayForm(false)

                player.current.controlBar.removeChild('MuteToggle');
                // Remove the VolumePanel button
                player.current.controlBar.removeChild('VolumePanel');

                // Add custom style to hide controls
                player.current.addClass("hide-controls");

                console.log(videoJSOptions)


                player.current.on("ended", () => {
                    // player.current.src({ src: '/assets/Gift-bg.jpg', type: 'image/jpg' });
                    // Add background audio
                    // audioElementRef.current.play()
                    // setDisplayForm(true)
                    // player.current.el().classList.add('hide-controls');
                    // if (player.current.controlBar) {
                    //     player.current.controlBar.hide(); // Hide control bar
                    // }
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
                        // Set a timer to pause the player after 10 seconds
                        window.setTimeout(() => {
                            // Check if the player is not disposed before pausing
                            if (player.current && !player.current.isDisposed()) {
                                player.current.pause();
                                player.current.el().classList.add('hide-controls');
                                if (player.current.controlBar) {
                                    player.current.controlBar.hide(); // Hide control bar
                                }
                                // Add background audio
                                audioElementRef.current.play()
                                setDisplayForm(true)

                            }
                        }, 13100); // Pause the player after 10 seconds
                    }

                }, 4000);

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

    const handleSkip = () => {

        // Check if the player is not disposed before taking any actions
        if (player.current && !player.current.isDisposed()) {
            // Hide the form and show controls if needed
            setDisplayForm(false);
            player.current.tech().el().style.opacity = '1';
            player.current.el().classList.remove('hide-controls');
            if (player.current.controlBar) {
                player.current.controlBar.show(); // Show control bar
            }
            // Resume playback
            player.current.play();
        }
    };

    const handleChildPlan1 = () => {
        // Check if the player is not disposed before updating the playlist
        if (player.current && !player.current.isDisposed()) {
            setDisplayForm(false)
            player.current.el().classList.remove('hide-controls');
            if (player.current.controlBar) {
                player.current.controlBar.show(); // Show control bar
            }
            player.current.src([
                { src: '/assets/hdfc/video/ChildPlan/Child_Plan1.mp4', type: 'video/mp4' },
            ]);


            // Play the video
            player.current.play();

            player.current.one("ended", () => {
                // Set displayForm to false after the second video ends
                setDisplayChildPlanForm(true)
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

    const handleChildSkip = () => {
        // Check if the player is not disposed before updating the playlist
        if (player.current && !player.current.isDisposed()) {
            setDisplayChildPlanForm(false)
            player.current.src([
                { src: '/assets/hdfc/video/ChildPlan/Chapter2_V1.2.mp4', type: 'video/mp4' },
            ]);

            // Play the video
            player.current.play();

            player.current.one("ended", () => {
                // setTimeout(() => {

                //     setDisplayChildPlanForm(false);
                console.log("ended");
                // }, 100); // Adjust the duration as needed
            });


            // Log the current item index after a short delay
            setTimeout(() => {
                console.log(player.current.playlist.currentItem()); // Log the current item index
            }, 100);
        }
    };

    // child plan ok button
    const handleOk = () => {
        setDisplayChildPlanForm(false)
        setDisplayExpolreForm(true)
    }

    // Yes, to Continue button click - go to thank you video
    const handleContinue = () => {
        // Check if the player is not disposed before updating the playlist
        if (player.current && !player.current.isDisposed()) {
            setDisplayExpolreForm(false)
            player.current.src([
                { src: '/assets/hdfc/video/ChildPlan/Chapter2_V1.2.mp4', type: 'video/mp4' },
            ]);

            // Play the video
            player.current.play();

            player.current.one("ended", () => {           
                console.log("ended");
               
            });

        }
    };
        // Explore button click - go to next video
        const handleExplore= () => {
            // Check if the player is not disposed before updating the playlist
            if (player.current && !player.current.isDisposed()) {
                setDisplayExpolreForm(false)
                player.current.src([
                    { src: '/assets/hdfc/video/ChildPlan/Chapter2_V2.mp4', type: 'video/mp4' },
                ]);
    
                // Play the video
                player.current.play();
    
                player.current.one("ended", () => {           
                    console.log("ended");
                    player.current.src([
                        { src: '/assets/hdfc/video/ChildPlan/Chapter2_V1.2.mp4', type: 'video/mp4' },
                    ]);        
                    player.current.play();
                });
    
            }
        };
    return (
        <div>

            <audio src="/assets/hdfc/video/Chapter-1/Audio1_2.mp3" type="audio/mp3" ref={audioElementRef}>

            </audio>

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
                <div>
                    {displayImg &&
                        <div className="image-container">
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
                                <InsurancePolicyForm getSkip={handleSkip} getChildPlan={handleChildPlan1} />
                            </div>
                        </>
                    }
                </div>

                <div id="wrapper">
                    {displayChildPlanForm &&
                        <>
                            <div id="overlay" className="videoFadeInAni">
                                <ChildPlan getChildSkip={handleChildSkip} getHandleOk={handleOk} />
                            </div>
                        </>
                    }
                </div>
                <div id="wrapper">
                    {displayExploreForm &&
                        <>
                            <div id="overlay" className="videoFadeInAni">
                                <ChildExplore getContinue={handleContinue} getExplore={handleExplore}/>
                            </div>
                        </>
                    }
                </div>
            </div>

        </div>
    );
};

export default MainVideoPlayer;

