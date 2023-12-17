import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import { decrypt } from "../common/cryptoUtils";
import 'videojs-playlist';

import Gift from '../page/gift'
import ContactForm from "../page/contactForm";



const VideoPlayer = () => {
    const videoPlayerRef = useRef(null);
    const { name } = useParams();
    const [displayForm, setDisplayForm] = useState(false);
    const [displayImg, setDisplayImg] = useState(true);
    const [displayContent, setDisplayContent] = useState(true);
    const [displayContactForm, setDisplayContactForm] = useState(false);

    // let setDisplayContactForm = 'false'

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
        userActions: { hotkeys: true },
        // muted: true,       
    };

    useEffect(() => {

        const audioElement = document.createElement('audio');
        audioElement.src = '/assets/Audio.mp3';
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
            audioElement.volume = 0.2;
        }

        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                player.current.playlist(videoJSOptions.sources);
                setDisplayForm(false)
                // Add custom style to hide controls
                player.current.addClass("hide-controls");

                console.log(videoJSOptions)
                // Set a timer to start playing the video after 4 seconds
                window.setTimeout(() => {
                    // Set the volume to 0.5 (50%)
                    audioElement.volume = 1;
                    // Check if the player is not disposed before calling play()
                    if (player.current && !player.current.isDisposed()) {
                        player.current.addClass("videoFadeInAni");
                        player.current.play();
                        setDisplayContent(false)
                        setDisplayImg(false)
                    }
                }, 5000);

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
    // Handle click event to start playing the video
    const handleClick = () => {
        // Check if the player is not disposed before calling play()
        // if (player.current && !player.current.isDisposed()) {
        //     player.current.play();
        //     player.current.muted = false
        // }
    };


    return (
        <div className="container" >

            <div id="overlay" className="flex mt-2 items-center text-red-600 font-semibold text-2xl justify-center">
                Customized Interactive Video Player
            </div>
            <div data-vjs-player onClick={handleClick}>
                {displayImg &&
                    <img alt="" src="/assets/Template-Video.jpg" className="w-full h-full container1 ">
                    </img>
                }
                <video
                    ref={videoPlayerRef}
                    className="video-js container"
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
                    </div>
                }
            </div>

        </div>
    );
};

export default VideoPlayer;
