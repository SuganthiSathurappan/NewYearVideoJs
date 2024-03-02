import "bootstrap/dist/css/bootstrap.min.css";

// import VideoPlayer from "./components/newYearVideo";
import MobilePersionalization from "./mobileComponent/personalizationMobile";
import Persionalization from "./components/persionalization";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/formPage';
import MobileVideoPlayer from './mobileComponent/interactiveMobile';
import VideoPlayer from './components/newYearVideo';
import React from "react";
import { useMediaQuery } from 'react-responsive';

// Hdfc desktop
import MainVideoPlayer from "./Hdfc/mainVideo";
import MainFormPage from "./Hdfc/mainFormPage"

// Hdfc Mobile
import HdfcInteractiveMobile from "./mobileComponent/Hdfc/hdfcInteractiveMobile";


function App() {
  const isMobile = useMediaQuery({ maxWidth: 940 });
  
  return (
    <>
      {isMobile ? (
        <Router>
          <Routes>
            {/* <Route path="/" element={<FormPage />} /> */}
            <Route path="/NewYear/:id" element={<FormPage />} />
            <Route path="/video-player/:name" element={<MobileVideoPlayer />} />
            <Route path="/NewYear-Persionalization/:name" element={<MobilePersionalization />} />            

            {/* Hdfc Routers */}

            <Route path="/hdfc/:id" element={<MainFormPage />} />
            <Route path="/hdfc-player/:name" element={<HdfcInteractiveMobile />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            {/* NewYear Routes */}
            {/* <Route path="/" element={<FormPage />} /> */}
            <Route path="/NewYear/:id" element={<FormPage />} />
            <Route path="/video-player/:name" element={<VideoPlayer />} />
            <Route path="/NewYear-Persionalization/:name" element={<Persionalization />} />

            {/* HDFC Routes */}
            <Route path="/" element={<MainFormPage />} />
            <Route path="/hdfc/:id" element={<MainFormPage />} />
            <Route path="/hdfc-player/:name" element={<MainVideoPlayer />} />
          </Routes>
        </Router>
      )
      }
    </>
  )
}
export default App;