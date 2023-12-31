import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "videojs-contextmenu-ui";
import "videojs-overlay";
import ContactForm from "./contactMobile";

// initialize video.js plugins
import "videojs-landscape-fullscreen";



const SecondVideoJs = () => {
    const [displayContactForm, setDisplayContactForm] = useState(false)
    const [displayVideo, setDisplayVideo] = useState(true)
    const videoPlayerRef = useRef(null);
    const player = useRef(null);

    const videoJSOptions = {
        videoSrc: 'https://new-year-video-js.vercel.app/assets/Greeting2.mp4',
        type: 'video/mp4',
        fluid: true,
        responsive: true,
        controls: true,
        userActions: { hotkeys: true },
        // muted: true,
    };

    useEffect(() => {


        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                // player.current.playlist(videoJSOptions.sources);
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

                player.current.on("ended", () => {
                    setDisplayContactForm(true)
                    setDisplayVideo(false)
                    player.current.el().classList.add('hide-controls');
                    if (player.current.controlBar) {
                        player.current.controlBar.hide(); // Hide control bar
                    }
                    console.log("ended");
                    // Set thumbnail image (poster)

                });


                player.current.play();

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

    }, [displayContactForm]);


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
            {displayVideo &&
                <div class="fullscreen" id="fullscreen">
                    <video
                        ref={videoPlayerRef}
                        className="video-js"
                    />
                </div>
            }
            {displayContactForm &&
                <div class="fullscreen" id="fullscreen">
                    <div id="formDiv">

                        <ContactForm />

                    </div>
                </div>
            }
        </div>
    );
};

export default SecondVideoJs;
