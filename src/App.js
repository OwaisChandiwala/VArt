import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoAnimation from './logoAnimation/logoanimation';
import Home from './home/home';
import MovieDetails from './MovieDetails/moviedet';

const App = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleAnimationEnd = () => {
    setIsAnimationComplete(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAnimationComplete ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        ) : (
          <LogoAnimation onAnimationEnd={handleAnimationEnd} />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
