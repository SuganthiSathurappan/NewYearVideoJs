import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import './style.css';
import VideoPlayer from "./components/newYearVideo";

import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import FormPage from './components/formPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/video-player/:name" element={<VideoPlayer />} />
        </Routes>
    </Router>

  )
}
export default App;