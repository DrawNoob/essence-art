import React, { useState } from 'react';
import './../Styles/Swiper.css';
import OrangeModal from './OrangeModal';

function SwiperHeader({ hoveredSlide, setHoveredSlide }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='swiperHeader-padd'>
      <div className="header-line-text margin-header">
        <p className="header-text-one">01  THE ART COLLECTION</p>
        <p className="header-text-one pointer" onClick={openModal}>
          + ABOUT ESSENCE GALLERY
        </p>
      </div>
      <div className="header-line-text-2">
        <p className="header-text-two">"Essence: Art in Evolution"</p>
        <p className='hoveredSlideNumber'>{hoveredSlide !== -1 ? `${hoveredSlide} / 9` : '-/9'}</p>
      </div>

      {isModalOpen && (
        <OrangeModal onClose={closeModal} />
      )}
    </div>
  );
}

export default SwiperHeader;
