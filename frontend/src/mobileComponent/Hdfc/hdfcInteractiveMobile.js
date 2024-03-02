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
import { handlePostRequest, playAudio } from "../../app/api/textToSpeechApi";
import ChildPlan from '../../page/Hdfc/childPlan'
import ChildExplore from "../../page/Hdfc/childExplore"

const HdfcInteractiveMobile = () => {
    const [displayForm, setDisplayForm] = useState(false);
    const [isSkipped, setIsSkipped] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);

    const [displayChildPlanForm, setDisplayChildPlanForm] = useState(false);
    const [displayExploreForm, setDisplayExpolreForm] = useState(false);
    const [isFirstVideoPlayed, setIsFirstVideoPlayed] = useState(true);

    const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
    const [source, setSource] = useState(null);

    const { name } = useParams();
    console.log(name)
    // Decrypt the name
    const decryptedName = decrypt(name);
    console.log(decryptedName)

    const audioMusicElementRef = useRef(false);
    const audioElementRef = useRef(false);
    const videoPlayerRef = useRef(null);
    const player = useRef(null);

    const spokenRef = useRef(false);



    const videoJSOptions = {
        // videoSrc: `/personalize-video/${pathName}.mp4`,
        // videoSrc: '/assets/hdfc/video/Chapter1-Video1_1.mp4',
        sources: [
            { src: '/assets/hdfc/video/Chapter-1/Chapter1-Video.mp4', type: 'video/mp4' },
        ],
        fluid: true,
        responsive: true,
        controls: true,
        userActions: { hotkeys: true },
        muted: false,
    };

    // // This useEffect using play video purpose
    useEffect(() => {
        const timeUpdateHandler = () => {
            console.log(player.current.currentTime())
            if (isFirstVideoPlayed && player.current.currentTime() >= 18.8 && player.current.currentTime() <= 19) {
                console.log(isFirstVideoPlayed)
                if (player.current && !player.current.isDisposed()) {
                    player.current.pause();
                    player.current.el().classList.add('hide-controls');
                    if (player.current.controlBar) {
                        player.current.controlBar.hide(); // Hide control bar
                    }
                    setTimeout(() => {
                        setDisplayForm(true);
                    }, 1000);
                }
            }
        };
        if (!displayContent) {
            if (videoPlayerRef.current) {
                player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                    // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                    player.current.playlist(videoJSOptions.sources);
                    setDisplayForm(false);
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

                    player.current.play();
                    window.setTimeout(() => {
                        console.log(isFirstVideoPlayed)
                        if (player.current && !player.current.isDisposed()) {
                            player.current.addClass("videoFadeInAni");
                            player.current.play();
                            setDisplayContent(false);

                            player.current.on('timeupdate', timeUpdateHandler);
                        }
                    }, 4000);

                    // // Check if the player is not disposed before calling play()
                    // if (player.current && !player.current.isDisposed()) {
                    //     player.current.addClass("imgToVideoFadeInAni");
                    //     // player.current.play();
                    //     window.setTimeout(() => {
                    //         // Check if the player is not disposed before pausing
                    //         if (player.current && !player.current.isDisposed()) {
                    //             player.current.pause();
                    //             // Add background audio
                    //             audioElementRef.current.play()
                    //             setDisplayForm(true)
                    //         }
                    //     }, 18800); // Pause the player after 10 seconds
                    // }


                    console.log("Player Ready")

                    player.current.on("ended", () => {
                        console.log("ended");
                    });

                });

                document.addEventListener('DOMContentLoaded', () => {
                    document.getElementById('fullscreen-toggle-btn'
                        .addEventListener('click', toggleFullScreen))
                })
            }
        }
        return () => {
            if (player.current) {
                player.current.off('timeupdate', timeUpdateHandler);
            }
        };

    }, [displayContent, isFirstVideoPlayed]);

    window.setTimeout(() => {
        setDisplayContent(false)


    }, 5000);
    useEffect(() => {
        if (isFirstVideoPlayed) {
            setDisplayForm(true);
        }
    }, [isFirstVideoPlayed]);
    // This useEffect using display name purpose
    useEffect(() => {
        setDisplayForm(false)
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
            setIsFirstVideoPlayed(false);
            console.log(isFirstVideoPlayed)
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
                player.current.el().classList.add('hide-controls');
                if (player.current.controlBar) {
                    player.current.controlBar.hide(); // Hide control bar
                }
                setDisplayChildPlanForm(true)
                audioMusicElementRef.current.play()
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
                { src: '/assets/hdfc/video/Thankyou_video.mp4', type: 'video/mp4' },
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
        audioMusicElementRef.current.pause()
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
    const handleExplore = () => {
        // Check if the player is not disposed before updating the playlist
        audioMusicElementRef.current.pause()
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
                    { src: '/assets/hdfc/video/Thankyou_video.mp4', type: 'video/mp4' },
                ]);
                player.current.play();
            });

        }
    };

    return (

        <div>
            <audio src="/assets/hdfc/video/Chapter-1/Audio1_2.mp3" type="audio/mp3" ref={audioElementRef}>

            </audio>
            <audio src="/assets/hdfc/video/ChildPlan/background-music-new.mp3" type="audio/mp3" loop
                ref={audioMusicElementRef}>
                {/* only play music */}
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

                {isFirstVideoPlayed && displayForm &&
                    <div className="imgToVideoFadeInAni">
                        <InsurancePolicyForm getSkip={handleSkip} getChildPlan={handleChildPlan1} />
                    </div>
                }
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
                                <ChildExplore getContinue={handleContinue} getExplore={handleExplore} />
                            </div>
                        </>
                    }
                </div>

            </div>
        </div>
    );
};

export default HdfcInteractiveMobile;
