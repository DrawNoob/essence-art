import React, { useState } from 'react';
import HeaderModal from './HeaderModal';
import Audio from './Audio';
import './../Styles/Header.css';

function Header({ scrollPercentage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="main-header">
      <div className="header-content">
        <h1 onClick={handleMenuClick}>
          <span className="MenuButton">MENU</span>
          <span className="header-percent">{Math.round(scrollPercentage)}%</span>
        </h1>
        <Audio/>
        <h1>ESSENCE</h1>
      </div>
      <hr className="header-line" />
      {isModalOpen && <HeaderModal onClose={handleModalClose} />}
    </div>
  );
}

export default Header;
