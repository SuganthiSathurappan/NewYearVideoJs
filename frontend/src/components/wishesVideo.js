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

    const player = useRef(null);


   
    const videoJSOptions = {
        sources: [
            { src: '/assets/Greeting2.mp4', type: 'video/mp4' },
        ],
        controls: true,
        userActions: { hotkeys: true },
        muted: true,       
    };

    useEffect(() => {
  
 
        if (videoPlayerRef.current) {
            player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
                // player.current.src({ src: videoJSOptions.videoSrc, type: videoJSOptions.type });
                player.current.playlist(videoJSOptions.sources);
              
                player.current.addClass("hide-controls");

                console.log(videoJSOptions)


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



    return (
        <div className="container" >

            <div id="overlay" className="flex mt-2 items-center text-red-600 font-semibold text-2xl justify-center">
                Customized Interactive Video Player
            </div>
            <div data-vjs-player>

                <video
                    ref={videoPlayerRef}
                    className="video-js container"
                />
 
            </div>

        </div>
    );
};

export default VideoPlayer;
