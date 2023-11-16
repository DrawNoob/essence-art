import React, { useEffect, useRef, useCallback } from 'react';

function OrangeModal({ onClose }) {
  const modalRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    const handleOutsideClick = (event) => handleClickOutside(event);
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleClickOutside]);

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal2">
        {/* Close Button */}
        <button className="modal-close2" onClick={onClose}>
          ⎯
        </button>
        {/* Modal content goes here */}
        <p className='headerTitleModal'>AMY SHERALD</p>
        <h2>“Black Excellence”</h2>
        <p className="aboutMainModal">ABOUT</p>
        <p className='modalMainText'>
          Welcome to our art collection, where you can experience the beauty and 
          diversity of artistic expression. Our collection features a wide range 
          of styles, mediums, and subjects, from classical paintings to contemporary 
          installations.
        </p>
        <p className='modalMainText'>
          Step into our gallery and be transported to different worlds through the vibrant 
          colors of our abstract paintings, the emotive brushstrokes of our impressionist 
          works, and the intricate details of our realism pieces. Allow yourself to be 
          mesmerized by the hypnotic swirls of our modern art pieces, and find peace in 
          the soothing landscapes of our pastoral scenes.
        </p>
      </div>
    </div>
  );
}

export default OrangeModal;
