import React, { useState, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "videojs-contextmenu-ui";
import "videojs-overlay";
import { useParams } from 'react-router-dom';
import 'videojs-playlist';
// initialize video.js plugins
import "videojs-landscape-fullscreen";
import { useNavigate } from 'react-router-dom';

import InsurancePolicyForm from '../page/HdfcVideoJs/insurancePolicyForm'
import ChildPlan from "../page/HdfcVideoJs/childPlan";
import ChildExplore from "../page/HdfcVideoJs/childExplore";
import YesContinue from "../page/HdfcVideoJs/yesContinue";
import Thankyou from "../page/HdfcVideoJs/thankYou";

import { decrypt } from "../common/cryptoUtils"
import { handlePostRequest, playAudio } from "../app/api/textToSpeechApi"

const Video = () => {
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


  const spokenRef = useRef(false);
  const player = useRef(null);
  const audioElementRef = useRef(false);
  const audioMusicElementRef = useRef(false);
  const navigate = useNavigate();

  console.log(name)
  // Decrypt the name
  const decryptedName = decrypt(name);
  console.log(decryptedName)

  useEffect(() => {
    // Check if the page was refreshed
    const isRefreshed = localStorage.getItem('isRefreshed');

    if (isRefreshed) {
      // Clear the flag
      localStorage.removeItem('isRefreshed');

      // Navigate to MainFormPage.js
      navigate(-1);
    }
  }, [navigate]);

  useEffect(() => {
    console.log("Set flag in localStorage when the component is unmounted")
    // Set flag in localStorage when the component is unmounted
    const handleBeforeUnload = () => {
      localStorage.setItem('isRefreshed', 'true');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

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
    const timeUpdateHandler = () => {
      // console.log(isFirstVideoPlayed)
      if (isFirstVideoPlayed && player.current.currentTime() >= 18.8 && player.current.currentTime() <= 19) {

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

    if (videoPlayerRef.current) {
      player.current = videojs(videoPlayerRef.current, videoJSOptions, () => {
        player.current.playlist(videoJSOptions.sources);
        setDisplayForm(false);
        player.current.controlBar.removeChild('MuteToggle');
        player.current.controlBar.removeChild('VolumePanel');
        // player.current.addClass("hide-controls");
        // // configure plugins
        // player.current.landscapeFullscreen({
        //   fullscreen: {
        //     enterOnRotate: true,
        //     exitOnRotate: true,
        //     alwaysInLandscapeMode: true,
        //     iOS: true
        //   }
        // })
        player.current.on("ended", () => {
          console.log("ended");
        });

        player.current.on("pause", () => {
          // If paused and in fullscreen, exit fullscreen
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
        });

        window.setTimeout(() => {
          console.log(isFirstVideoPlayed)
          if (player.current && !player.current.isDisposed()) {
            player.current.addClass("videoFadeInAni");
            const playPromise = player.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log(" Automatic playback started!")
                  setDisplayContent(false);
                  setDisplayImg(false);
                  player.current.on('timeupdate', timeUpdateHandler);
                }).catch(error => {
                  // Auto-play was prevented
                  // User interaction is required to start playback
                  console.error("Autoplay was prevented:", error);
                });
            }
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
      if (player.current) {
        player.current.off('timeupdate', timeUpdateHandler);
      }
    };
  }, [isFirstVideoPlayed]);

  useEffect(() => {
    if (isFirstVideoPlayed) {
      setDisplayForm(true);
    }
  }, [isFirstVideoPlayed]);

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
      setDisplayThankyou(true)
    }
  };

  // child plan ok button
  const handleOk = () => {

    setDisplayChildPlanForm(false)
    setDisplayExpolreForm(true)
    player.current.el().classList.remove('hide-controls');
    if (player.current.controlBar) {
      player.current.controlBar.show(); // Show control bar
    }
  }

  // Yes, to Continue button click - go to thank you video
  const handleContinue = () => {
    // Check if the player is not disposed before updating the playlist
    // audioMusicElementRef.current.pause()
    setDisplayExpolreForm(false)
    setDisplayYesContinue(true)
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
        setDisplayThankyou(true)
        // player.current.src([
        //   { src: '/assets/hdfc/video/Thankyou_video.mp4', type: 'video/mp4' },
        // ]);
        // player.current.play();
      });

    }
  };

  return (
    <div data-vjs-player className="relative w-full overflow-hidden">

      <audio src="/assets/hdfc/video/Chapter-1/Audio1_2.mp3" type="audio/mp3" ref={audioElementRef}>
        {/* Insurance interactive audio */}
      </audio>

      <audio src="/assets/hdfc/video/ChildPlan/background-music-new.mp3" type="audio/mp3" loop
        ref={audioMusicElementRef}>
        {/* only play music */}
      </audio>

      <div className="aspect-w-16 aspect-h-9 ">
        <video
          ref={videoPlayerRef}
          className="video-js  vjs-16-9 w-fit "
        />
        {/* <div ref={videoRef} className="video-js vjs-16-9 w-fit " /> */}
      </div>

      {displayContent &&
        <div >
          <div
            className="absolute inset-0 overflow-auto md:overflow-hidden"
            style={{ backgroundImage: 'url(/assets/hdfc/image/bg-insurance.jpg)' }}
          >
            <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="p-1  bg-cover bg-center ">
                <div>
                  <span className="spanCss1 displayContentCss text-black" id="text-to-speech-span1">Hello</span>
                  <span className="spanCss1 displayContentCss text-black" id="text-to-speech-span2"> {decryptedName} </span><br />
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {displayForm &&
        <div className="videoFadeInAni">
          <InsurancePolicyForm getChildPlan={handleChildPlan1} />
        </div>
      }
      {displayChildPlanForm &&

        <div className="videoFadeInAni">
          <ChildPlan getChildSkip={handleChildSkip} getHandleOk={handleOk} />
        </div>

      }
      {displayExploreForm &&

        <div className="videoFadeInAni">
          <ChildExplore getContinue={handleContinue} getExplore={handleExplore} />
        </div>

      }
      {displayYesContinue &&

        <div className="videoFadeInAni">
          <YesContinue getChildSkip={handleChildSkip} />
        </div>

      }
      {displayThankyou &&

        <div className="videoFadeInAni">
          <Thankyou />
        </div>

      }
    </div >
  );
};

export default Video;
