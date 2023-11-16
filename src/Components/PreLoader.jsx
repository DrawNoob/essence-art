import React, { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader'
import './../Styles/preloader.css';
import Audio from './Audio';

const PreLoader = ({ handleClose }) => {
  const [showClick, setShowClick] = useState(false);
  const [closing, setClosing] = useState(false);
  const [showEssence, setShowEssence] = useState(true);

  const getSizeBasedOnScreenWidth = () => {
    if (window.innerWidth <= 540) {
      return '75vw';
    } else {
      return '18vw';
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowClick(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handlePreLoaderClose = () => {
    setClosing(true);
    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  useEffect(() => {
    if (showClick) {
      setTimeout(() => {
        setShowEssence(false);
      }, 500);
    }
  }, [showClick]);

  return (
      <div className={`preloader ${closing ? 'fade-out' : ''}`}>
          {showEssence ? (
            <div className={`loading-animation ${showClick ? 'fade-out' : ''}`}>
              ESSENCE
            </div>
          ) : (
            <div className="click-animation" onClick={handlePreLoaderClose}>
              CLICK TO ENTER
            </div>
          )}
          <ClipLoader size={getSizeBasedOnScreenWidth()} color="white" speedMultiplier= "0.2"/>
          <div className="preloader-audio">
              <Audio/>
          </div>
      </div>
  );
};

export default PreLoader;
