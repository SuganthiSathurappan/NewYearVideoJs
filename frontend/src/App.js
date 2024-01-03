import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './responsiveStyle.css';
// import VideoPlayer from "./components/newYearVideo";
import MobilePersionalization from "./mobileComponent/personalizationMobile";
import Persionalization from "./components/persionalization";

import DemoDesign from './referenceDesign/demoDesign'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/formPage';
import MobileVideoPlayer from './mobileComponent/interactiveMobile';
import VideoPlayer from './components/newYearVideo';
import React, { useState } from "react";
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ maxWidth: 940 });
  // const isMobile = window.innerWidth <= 480;
  // const [showFirstImage, setShowFirstImage] = useState(true);
  return (
    <>
      {isMobile ? (
        <Router>
          <Routes>
            {/* <Route path="/" element={<FormPage />} /> */}
            <Route path="/NewYear/:id" element={<FormPage />} />
            <Route path="/video-player/:name" element={<MobileVideoPlayer />} />
            <Route path="/NewYear-Persionalization/:name" element={<MobilePersionalization />} />
            <Route path="/Demo" element={<DemoDesign />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            {/* <Route path="/" element={<FormPage />} /> */}
            <Route path="/NewYear/:id" element={<FormPage />} />
            <Route path="/video-player/:name" element={<VideoPlayer />} />
            <Route path="/NewYear-Persionalization/:name" element={<Persionalization />} />
            <Route path="/Demo" element={<DemoDesign />} />
          </Routes>
        </Router>
      )
      }
    </>
  )
}
export default App;