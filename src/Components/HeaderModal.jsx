import React, { useRef, useEffect } from 'react';
import '../Styles/Header.css';

function HeaderModal({ onClose }) {
  const modalRef = useRef(null);

  const closeModal = () => {
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click occurred outside the modal by checking if the modalRef exists and if the target is not inside the modal
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    // Add a click event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className="modal-overlay" />
      <div ref={modalRef} className="modal">
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          ⎯
        </button>
        {/* Modal content goes here */}
        <p className="headerTitleModal">01 THE ART COLLECTION</p>
        <h2>"Essence: Art in Evolution"</h2>
        <div className="linksMenu">
          <a href="https://www.google.com/">ARTISTS</a>
          <a href="https://www.google.com/">FAQ</a>
          <a href="https://www.google.com/">TIPS</a>
          <a href="https://www.google.com/">ABOUT GALLERY</a>
        </div>
        <div className="linksMenu2">
          <a href="https://www.google.com/">Join us on discord</a>
          <a href="https://www.google.com/">visit vault</a>
          <a href="https://www.google.com/">TERMS OF SERVICE AND NFT OWNER LICENSE</a>
          <a href="https://www.google.com/">PRIVACY POLICY</a>
        </div>
      </div>

    </>
  );
}

export default HeaderModal;
