

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

// HDFC Recent Responsive Video js
import MainFormPageVideojs from "./HdfcVideoJs/mainFormPage";
import MainVideojsApp from "./HdfcVideoJs/mainAppVideojs";
import MainVideoJsPLayer from "./HdfcVideoJs/mainVideoJs"



function App() {
  const isMobile = useMediaQuery({ maxWidth: 940 });

  return (
    <>

      <Router>
        <Routes>
          {/* NewYear Routes */}
          {/* <Route path="/" element={<FormPage />} /> */}
          <Route path="/NewYear/:id" element={<FormPage />} />
          <Route path="/video-player/:name" element={<VideoPlayer />} />
          <Route path="/NewYear-Persionalization/:name" element={<Persionalization />} />

          {/* HDFC Routes */}
          <Route path="/" element={<MainFormPageVideojs />} />
          <Route path="/hdfc/:id" element={<MainFormPageVideojs />} />
          <Route path="/hdfc-player/:name" element={<MainVideojsApp />} />
        </Routes>
      </Router>

    </>
  )
}
export default App;