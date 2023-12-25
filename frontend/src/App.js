import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import './responsiveStyle.css';
import VideoPlayer from "./components/newYearVideo";
import Persionalization from "./components/persionalization";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormPage from './components/formPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/NewYear/:id" element={<FormPage />} />
        <Route path="/video-player/:name" element={<VideoPlayer />} />
        <Route path="/NewYear-Persionalization/:name" element={<Persionalization />} />
      </Routes>
    </Router>

  )
}
export default App;