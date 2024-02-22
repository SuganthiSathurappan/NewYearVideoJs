import React, { useState } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayerWithLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const videoPlayerRef = React.createRef();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  React.useEffect(() => {
    const videoNode = videoPlayerRef.current;
    const player = videojs(videoNode, {});

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden w-60">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoPlayerRef}
          className="video-js absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/assets/hdfc/video/Chapter-1/Video1_1.mp4" type="video/mp4" />
          {/* Add other video sources if needed */}
        </video>
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className=" bg-white bg-opacity-30 p-8 rounded-md shadow-md">
          {!isLoggedIn ? (
            <>
              <h2 className="mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <input type="text" className="w-full mb-2 p-2 rounded-md border border-gray-300" placeholder="Username" />
                <input type="password" className="w-full mb-2 p-2 rounded-md border border-gray-300" placeholder="Password" />
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">Login</button>
              </form>
            </>
          ) : (
            <h2>Welcome User!</h2>
            // {/* Additional logged in content */}
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerWithLogin;
