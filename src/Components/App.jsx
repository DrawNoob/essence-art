import React, { useState } from 'react';
import Header from './Header';
import PreLoader from './PreLoader';
import './../Styles/main.css'
import SwiperSlider from './Swiper';
import SwiperHeader from './SwiperHeader';

export default function App() {
  const [hoveredSlide, setHoveredSlide] = useState('-');
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showPreLoader, setShowPreLoader] = useState(true);

  const handleClosePreLoader = () => {
    setShowPreLoader(false);
  };

  return (
    <>
      {showPreLoader && <PreLoader handleClose={handleClosePreLoader} />}
      <Header scrollPercentage={scrollPercentage} />
      <SwiperHeader hoveredSlide={hoveredSlide} />
      <SwiperSlider setHoveredSlide={setHoveredSlide} setScrollPercentage={setScrollPercentage} />
    </>
  );
}