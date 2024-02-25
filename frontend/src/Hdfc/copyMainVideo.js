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
import YesContinue from "../page/Hdfc/yesContinue";
import Thankyou from "../page/Hdfc/thankYou";

import { handlePostRequest, playAudio } from "../app/api/textToSpeechApi";

const MainVideoPlayer = () => {
    const videoPlayerRef = useRef(null);
    const { name } = useParams();
    const [displayForm, setDisplayForm] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);
    const [displayChildPlanForm, setDisplayChildPlanForm] = useState(false);
    const [displayExploreForm, setDisplayExpolreForm] = useState(false);
    const [displayYesContinue, setDisplayYesContinue] = useState(false);
    const [displayThankyou, setDisplayThankyou] = useState(false);

    const [isFirstVideoPlayed, setIsFirstVideoPlayed] = useState(true);

    const [audioContext, setAudioContext] = useState(new (window.AudioContext || window.webkitAudioContext)());
    const [source, setSource] = useState(null);

    const isMobile = useMediaQuery({ maxWidth: 480 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

    const spokenRef = useRef(false);
    const player = useRef(null);
    const audioElementRef = useRef(false);
    const audioMusicElementRef = useRef(false);

    console.log(name)
    // Decrypt the name
    const decryptedName = decrypt(name);
    console.log(decryptedName)



    const videoJSOptions = {
        sources: [
            { src: '/assets/hdfc/video/Chapter-1/Chapter1-Video.mp4', type: 'video/mp4' },
        ],
        controls: true,
        fluid: true,
        responsive: true,
        userActions: { hotkeys: true },
        muted: false,
    };

    useEffect(() => {
        if (!spokenRef.current) {
            // Check if the element with ID 'text-to-speech-span1' exists
            const spanElement = document.getElementById('text-to-speech-span1');
            if (spanElement) {
                const spanContent = spanElement.innerText;
                console.log(spanContent);
                // Now you can perform your operations with spanContent
                handlePostRequest(`${spanContent + decryptedName} `, (audioData) => {
                    playAudio(audioData, audioContext, setAudioContext, setSource);
                });
            }
        }
    }, [spokenRef]);

    useEffect(() => {


        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                player.current.playlist(videoJSOptions.sources);
                setDisplayForm(false);
                player.current.controlBar.removeChild('MuteToggle');
                player.current.controlBar.removeChild('VolumePanel');
                player.current.addClass("hide-controls");

                player.current.on("ended", () => {
                    setDisplayThankyou(true)
                    console.log("ended");
                });

                window.setTimeout(() => {
                    console.log(isFirstVideoPlayed)
                    if (player.current && !player.current.isDisposed()) {
                        player.current.addClass("videoFadeInAni");
                        player.current.play();
                        setDisplayContent(false);
                        setDisplayImg(false);
                        // player.current.on('timeupdate', timeUpdateHandler);
                    }
                }, 4000);

                console.log("Player Ready");
            });
            document.addEventListener('DOMContentLoaded', () => {
                document.getElementById('fullscreen-toggle-btn')
                    .addEventListener('click', toggleFullScreen);
            });
        }

        return () => {

        };
    }, []);


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





    return (
        <div>

            <audio src="/assets/hdfc/video/Chapter-1/Audio1_2.mp3" type="audio/mp3" ref={audioElementRef}>
                {/* Insurance interactive audio */}
            </audio>

            <audio src="/assets/hdfc/video/ChildPlan/background-music.mp3" type="audio/mp3" loop
                ref={audioMusicElementRef}>
                {/* only play music */}
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
                <div >
                    {displayThankyou &&
                        <div className="image-container overlayTitle1">
                             <img alt="" src="/assets/hdfc/image/bg-insurance.jpg" />
                            {/* <span className="text-black ">Hi welcome</span> */}
                        </div>

                    }
                </div>
            </div>

        </div>
    );
};

export default MainVideoPlayer;

