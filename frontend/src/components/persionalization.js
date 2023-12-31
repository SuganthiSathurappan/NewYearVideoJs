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


const Persionalization = () => {
    const { name } = useParams();
    console.log(name)
    // Decrypt the name
    const decryptedName = decrypt(name);
    console.log(decryptedName)

    let pathName = ""
    if (decryptedName === "Ajay") {
        pathName = "Ajay"
    }
    else if (decryptedName === "Balaji") {
        pathName = "Balaji"
    }
    else if (decryptedName === "Bougle") {
        pathName = "JC"
    }
    else if (decryptedName === "Juhi") {
        pathName = "Juhi"
    }
    else if (decryptedName === "Marwan") {
        pathName = "Marwan"
    }
    else if (decryptedName === "Nipun") {
        pathName = "Nipun"
    }
    else if (decryptedName === "Rajiv") {
        pathName = "Rajiv"
    }
    else if (decryptedName === "Saravana") {
        pathName = "Saravana"
    }
    else if (decryptedName === "Sophie") {
        pathName = "Sophie"
    }
    else if (decryptedName === "Sunny") {
        pathName = "Sunny"
    }
    else if (decryptedName === "Kevin") {
        pathName = "Kevin"
    }
    else if (decryptedName === "Sridhar") {
        pathName = "Sridhar"
    }
    else {
        pathName = "JC"
    }
    // const isDesktopOrLaptop = useMediaQuery({
    //     query: '(min-device-width: 1224px)'
    // })
    // const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
    // const isTabletOrMobileDevice = useMediaQuery({
    //     query: '(max-device-width: 1224px)'
    // })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isDesktop = useMediaQuery({ minWidth: 992 });

    const videoPlayerRef = useRef(null);
    const player = useRef(null);



    const videoJSOptions = {
        videoSrc: `/personalize-video/${pathName}.mp4`,
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
            {/* <div id="overlay" className="flex mt-10 items-center text-blue-700 font-semibold text-2xl justify-center">
                Persionalization Video Player
            </div> */}
            <div className={`video-container ${isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'}`}>
                <video ref={videoPlayerRef} className="video-js " />
            </div>
        </div>
    );
};

export default Persionalization;
