import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
// import ImageCarousel from './components/imageCarousel';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/image-carousel" element={<ImageCarousel />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



