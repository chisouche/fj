import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import './App.css';
import AuthPage from './components/accountCreate'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" component={AuthPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



