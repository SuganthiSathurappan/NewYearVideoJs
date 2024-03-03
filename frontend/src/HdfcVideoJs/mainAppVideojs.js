// export default App;
import React from "react";
import { useParams } from 'react-router-dom';

import VideoPlayer from "./mainVideoJs";

import ChildPlan from "../page/HdfcVideoJs/childPlan";

const App = () => {
  const { username } = useParams();


  return (
    <div className="bg-gray-200 ">
      {/* Center the video player on mobile devices */}
      <div className="flex  justify-center items-center md:items-start h-screen">
        {/* Dont touch this part */}
        <div className="container mx-auto max-w-7xl lg:px-8">
          {/* <h1>Video Player Example</h1> */}
          <div className="w-full lg:w-3/4 lg:h-auto my-auto md:mx-auto">
            <div className="video-play text-center">
              <VideoPlayer                
                name={username}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
