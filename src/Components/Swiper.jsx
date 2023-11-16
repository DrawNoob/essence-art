import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageModal from './ImageModal';
import 'swiper/css';
import 'swiper/css/pagination';
import './../Styles/Swiper.css';
import { Parallax, Mousewheel, Keyboard } from 'swiper/modules';

export default function SwiperSlider({ setHoveredSlide, setScrollPercentage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [swiper, setSwiper] = useState(null);
  const [hoveredSlide, setHoveredSlideIndex] = useState(null);

  const handleMenuClick = (imageURL) => {
    setSelectedImage(imageURL);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  const slidesData = [
    { imageUrl: 'Assets/1.jpg', title: '“Empowered Elegance”'},
    { imageUrl: 'Assets/1-vid.gif', title: '“Whispers in the Wind”'},
    { imageUrl: 'Assets/3.jpg', title: '“Undulating Rhythms”'},
    { imageUrl: 'Assets/2-vid.gif', title: '“Graceful Strength”'},
    { imageUrl: 'Assets/2.jpg', title: '"Empowered Elegance"'},
    { imageUrl: 'Assets/1-vid.gif', title: '“Whispers in the Wind”'},
    { imageUrl: 'Assets/3.jpg', title: '“Undulating Rhythms”'},
    { imageUrl: 'Assets/2-vid.gif', title: '“Graceful Strength”'},
    { imageUrl: 'Assets/2.jpg', title: '"Empowered Elegance"'},
  ];

  useEffect(() => {
    if (swiper) {
      swiper.on('slideChangeTransitionEnd', () => {
        const percentage = (swiper.realIndex / (slidesData.length - 1)) * 100;
        setScrollPercentage(percentage);
      });
    }
  }, [swiper, slidesData, setScrollPercentage]);

  const attachCustomCursor = (title) => {
    const customCursor = document.createElement("div");
    customCursor.textContent = title;
    customCursor.classList.add("custom-cursor");
    document.body.appendChild(customCursor);
    return customCursor;
  };

  const updateCustomCursor = (e) => {
    const customCursor = document.querySelector(".custom-cursor");
    if (customCursor) {
      customCursor.style.top = e.clientY + "px";
      customCursor.style.left = e.clientX + "px";
    }
  };

  const screenWidth = window.innerWidth;
  let slidesPerView;
  let autoScroll = false;
  
  if (screenWidth < 640) {
    slidesPerView = 2.4;
    autoScroll = true;
  } else if (screenWidth < 1441) {
    slidesPerView = 4.4;
  } else {
    slidesPerView = 5.2;
  }

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={16}
        parallax={true}
        mousewheel={true}
        keyboard={true}
        autoplay={autoScroll ? { delay: 2000 } : false}
        modules={[Parallax, Mousewheel, Keyboard]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          setHoveredSlide(swiper.activeIndex + 1);
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            onClick={() => handleMenuClick(slide.imageUrl)}
            className={`swiper-slide ${hoveredSlide === index ? 'swiper-slide-dark' : ''}`}
            onMouseEnter={() => {
              setHoveredSlide(index + 1);
              setHoveredSlideIndex(index);
              attachCustomCursor(slide.title);
            }}
            onMouseMove={updateCustomCursor} 
            onMouseLeave={() => {
              setHoveredSlide('-');
              const customCursor = document.querySelector(".custom-cursor");
              if (customCursor) {
                document.body.removeChild(customCursor);
              }
            }}
          >
            <div className="slider__container">
              <div
                className="slider__img"
                data-swiper-parallax="35%"
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isModalOpen && <ImageModal imageURL={selectedImage} onClose={handleModalClose} />}
    </>
  );
}
