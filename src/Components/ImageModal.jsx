import React, { useRef, useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import '../Styles/Header.css';
import '../Styles/Swiper.css';

export default function ImageModal({ imageURL, onClose }) {
  const modalRef = useRef(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <div ref={modalRef} className="modal-image">
        {/* Modal Screen -------------------------------------------- */}
        <div className="modal-container">
          <div className="modal-image-left" style={{ backgroundImage: `url(${imageURL})` }}></div>
          <div className="modal-image-right">
              <div className="modal-right-column">
                <div className="modal-image-header">
                    {/* Close Button */}
                    <button className="modal-close-image" onClick={onClose}>
                        <img src="./../Assets/Arrow.svg" alt="" />BACK
                    </button>
                    <button className="modal-close-image-2" onClick={onClose}>
                        SHARE<img src="./../Assets/Arrow-2.svg" alt="" />
                    </button>
                </div>
                <div className="modal-right-buttons">
                    <button className={`tab-1 ${activeTab === 1 ? 'active-modal' : ''}`} onClick={() => handleTabClick(1)}>DESCRIPTION</button>
                    <button className={`tab-2 ${activeTab === 2 ? 'active-modal' : ''}`} onClick={() => handleTabClick(2)}>ARTIST</button>
                    <button className={`tab-3 ${activeTab === 3 ? 'active-modal' : ''}`} onClick={() => handleTabClick(3)}>ORDER INFO</button>
                </div>
                {/* TAB 1 _______________________________________________ */}
                {activeTab === 1 && 
                    <div className="modal-right-tab-1">
                        <h2>“Dancing Colors”</h2>
                        <p>
                        In the realm of abstract art, where shapes and colors meld and dance without the constraints of representation, "Abstract Reverie" invites viewers on a profound journey through the unseen. This mesmerizing piece embodies the essence of abstraction, offering an open canvas for interpretation and emotional exploration.</p>
                        <p><br/>
                        At first glance, the canvas may seem like a chaotic explosion of colors and forms, but upon deeper contemplation, it reveals a carefully orchestrated symphony of elements. Vivid strokes of vibrant reds, blues, and yellows intermingle with delicate shades of pastel, creating a visual feast that beckons the viewer to immerse themselves in its depths.</p>
                        <br />
                        <p>As you delve into "Abstract Reverie," you may find your thoughts drifting, forming connections between the colors, lines, and shapes that resonate with your own experiences and emotions.</p>
                    </div>
                }
                {/* TAB 2 _______________________________________________ */}
                {activeTab === 2 && 
                    <div className="modal-right-tab-2">
                      <div className="ontop-slide-title">
                          <h3>Amy sherald</h3>
                          <p>Sherald has exhibited her work extensively in solo and group exhibitions. Some of her notable exhibitions include "Amy Sherald: The Heart of the Matter" at the Hauser & Wirth Gallery in New York and "Amy Sherald" at the Contemporary Art Museum St. Louis. </p>
                      </div>
                      <ReactSimplyCarousel
                              containerProps={{
                                style: {
                                  width: "97%",
                                  justifyContent: "space-between",
                                  marginLeft: "3%",
                                }
                              }}
                              activeSlideIndex={activeSlideIndex}
                              onRequestChange={setActiveSlideIndex}
                              itemsToShow={3}
                              itemsToScroll={2}
                              speed={400}
                              easing="linear"
                            >
                            
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/4.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/3.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1.jpg)`}}></div>
                      </ReactSimplyCarousel>
                    </div>
                }
                {/* TAB 3 _______________________________________________ */}
                {activeTab === 3 && 
                    <div className="modal-right-tab-3">
                        <div className="tab-3-top">
                          <div className="tab-3-titles">
                            <p>Amy sherald </p>
                            <h3>“Dancing Colors”</h3>
                          </div>
                          <div className="price-title">
                            <p><span className='green-before'>⬤</span> Price now</p>
                            <p>Previous price</p>
                          </div>
                          <div className="under-price-title">
                            <p>7.2 ETH</p>
                            <p>6.5 eth <br /> 6.0 eth <br /> 5.2 eth</p>
                          </div>
                        </div>
                        <div className="tab-3-form">
                          <input type="text" placeholder='YOUR EMAIL'/>
                          <button>order now</button>
                        </div>
                    </div>
                }
              </div>
              <div className="modal-right-footer">
                  <a href="google.com">Join us on discord</a>
                  <a href="google.com">PRIVACY POLICY</a>
              </div>
          </div>
        </div>
        {/* Modal Screen -------------------------------------------- */}
        <div className="modal-container">
          <div className="modal-image-left" style={{ backgroundImage: `url(Assets/1-vid.gif)` }}></div>
          <div className="modal-image-right">
              <div className="modal-right-column">
                <div className="modal-image-header">
                    {/* Close Button */}
                    <button className="modal-close-image" onClick={onClose}>
                        <img src="./../Assets/Arrow.svg" alt="" />BACK
                    </button>
                    <button className="modal-close-image-2" onClick={onClose}>
                        SHARE<img src="./../Assets/Arrow-2.svg" alt="" />
                    </button>
                </div>
                <div className="modal-right-buttons">
                    <button className={`tab-1 ${activeTab === 1 ? 'active-modal' : ''}`} onClick={() => handleTabClick(1)}>DESCRIPTION</button>
                    <button className={`tab-2 ${activeTab === 2 ? 'active-modal' : ''}`} onClick={() => handleTabClick(2)}>ARTIST</button>
                    <button className={`tab-3 ${activeTab === 3 ? 'active-modal' : ''}`} onClick={() => handleTabClick(3)}>ORDER INFO</button>
                </div>
                {/* TAB 1 _______________________________________________ */}
                {activeTab === 1 && 
                    <div className="modal-right-tab-1">
                        <h2>“Graceful Strength”</h2>                    
                        <p>
                        In the heart of a lush, tranquil forest, sunlight filters through the dense canopy, 
                        creating dappled patterns on the forest floor. Towering trees, their trunks adorned 
                        with vibrant green moss, stand tall and majestic, while a gentle breeze rustles the 
                        leaves overhead. </p>
                        <p> <br />
                        A small, meandering stream glistens in the soft light, its crystal-clear waters 
                        reflecting the surrounding greenery. The symphony of nature's sounds fills the air, 
                        with birdsong and the distant murmur of flowing water. This enchanting woodland scene 
                        invites you to escape into the serenity of nature's embrace</p>
                    </div>
                }
                {/* TAB 2 _______________________________________________ */}
                {activeTab === 2 && 
                    <div className="modal-right-tab-2">
                      <div className="ontop-slide-title">
                          <h3>Sarah Young</h3>
                          <p>Sarah Young stands as a celebrated figure in the art world, her canvases adorning the walls of galleries and museums around the globe. Her journey through colors and canvases continues to inspire aspiring artists and art enthusiasts alike, reminding us all of the transformative power of art.</p>
                      </div>
                      <ReactSimplyCarousel
                              containerProps={{
                                style: {
                                  width: "97%",
                                  justifyContent: "space-between",
                                  marginLeft: "3%",
                                }
                              }}
                              activeSlideIndex={activeSlideIndex}
                              onRequestChange={setActiveSlideIndex}
                              itemsToShow={3}
                              itemsToScroll={2}
                              speed={400}
                              easing="linear"
                            >
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/4.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/3.jpg)`}}></div>
                      </ReactSimplyCarousel>
                    </div>
                }
                {/* TAB 3 _______________________________________________ */}
                {activeTab === 3 && 
                    <div className="modal-right-tab-3">
                        <div className="tab-3-top">
                          <div className="tab-3-titles">
                            <h3>“Graceful Strength”</h3>
                            <p>Sarah Young</p>
                          </div>
                          <div className="price-title">
                            <p><span className='green-before'>⬤</span> Price now</p>
                            <p>Previous price</p>
                          </div>
                          <div className="under-price-title">
                            <p>7.2 ETH</p>
                            <p>6.5 eth <br /> 6.0 eth <br /> 5.2 eth</p>
                          </div>
                        </div>
                        <div className="tab-3-form">
                          <input type="text" placeholder='YOUR EMAIL'/>
                          <button>order now</button>
                        </div>
                    </div>
                }
              </div>
              <div className="modal-right-footer">
                  <a href="google.com">Join us on discord</a>
                  <a href="google.com">PRIVACY POLICY</a>
              </div>
          </div>
        </div>
        {/* Modal Screen -------------------------------------------- */}
        <div className="modal-container">
          <div className="modal-image-left" style={{ backgroundImage: `url(Assets/2.jpg)` }}></div>
          <div className="modal-image-right">
              <div className="modal-right-column">
                <div className="modal-image-header">
                    {/* Close Button */}
                    <button className="modal-close-image" onClick={onClose}>
                        <img src="./../Assets/Arrow.svg" alt="" />BACK
                    </button>
                    <button className="modal-close-image-2" onClick={onClose}>
                        SHARE<img src="./../Assets/Arrow-2.svg" alt="" />
                    </button>
                </div>
                <div className="modal-right-buttons">
                    <button className={`tab-1 ${activeTab === 1 ? 'active-modal' : ''}`} onClick={() => handleTabClick(1)}>DESCRIPTION</button>
                    <button className={`tab-2 ${activeTab === 2 ? 'active-modal' : ''}`} onClick={() => handleTabClick(2)}>ARTIST</button>
                    <button className={`tab-3 ${activeTab === 3 ? 'active-modal' : ''}`} onClick={() => handleTabClick(3)}>ORDER INFO</button>
                </div>
                {/* TAB 1 _______________________________________________ */}
                {activeTab === 1 && 
                    <div className="modal-right-tab-1">
                    <h2>“Dancing Colors”</h2>
                    <p>
                    In the realm of abstract art, where shapes and colors meld and dance without the constraints of representation, "Abstract Reverie" invites viewers on a profound journey through the unseen. This mesmerizing piece embodies the essence of abstraction, offering an open canvas for interpretation and emotional exploration.</p>
                    <p><br/>
                    At first glance, the canvas may seem like a chaotic explosion of colors and forms, but upon deeper contemplation, it reveals a carefully orchestrated symphony of elements. Vivid strokes of vibrant reds, blues, and yellows intermingle with delicate shades of pastel, creating a visual feast that beckons the viewer to immerse themselves in its depths.</p>
                    <br />
                    <p>As you delve into "Abstract Reverie," you may find your thoughts drifting, forming connections between the colors, lines, and shapes that resonate with your own experiences and emotions.</p>
                </div>
                }
                {/* TAB 2 _______________________________________________ */}
                {activeTab === 2 && 
                    <div className="modal-right-tab-2">
                      <div className="ontop-slide-title">
                          <h3>Amy sherald</h3>
                          <p>Sherald has exhibited her work extensively in solo and group exhibitions. Some of her notable exhibitions include "Amy Sherald: The Heart of the Matter" at the Hauser & Wirth Gallery in New York and "Amy Sherald" at the Contemporary Art Museum St. Louis. </p>
                      </div>
                      <ReactSimplyCarousel
                              containerProps={{
                                style: {
                                  width: "97%",
                                  justifyContent: "space-between",
                                  marginLeft: "3%",
                                }
                              }}
                              activeSlideIndex={activeSlideIndex}
                              onRequestChange={setActiveSlideIndex}
                              itemsToShow={3}
                              itemsToScroll={2}
                              speed={400}
                              easing="linear"
                            >
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/4.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/3.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1.jpg)`}}></div>
                      </ReactSimplyCarousel>
                    </div>
                }
                {/* TAB 3 _______________________________________________ */}
                {activeTab === 3 && 
                    <div className="modal-right-tab-3">
                        <div className="tab-3-top">
                          <div className="tab-3-titles">
                            <p>Amy sherald </p>
                            <h3>“Dancing Colors”</h3>
                          </div>
                          <div className="price-title">
                            <p><span className='green-before'>⬤</span> Price now</p>
                            <p>Previous price</p>
                          </div>
                          <div className="under-price-title">
                            <p>7.2 ETH</p>
                            <p>6.5 eth <br /> 6.0 eth <br /> 5.2 eth</p>
                          </div>
                        </div>
                        <div className="tab-3-form">
                          <input type="text" placeholder='YOUR EMAIL'/>
                          <button>order now</button>
                        </div>
                    </div>
                }
              </div>
              <div className="modal-right-footer">
                  <a href="google.com">Join us on discord</a>
                  <a href="google.com">PRIVACY POLICY</a>
              </div>
          </div>
        </div>
        {/* Modal Screen -------------------------------------------- */}
        <div className="modal-container last-tab">
          <div className="modal-image-left" style={{ backgroundImage: `url(Assets/3.jpg)` }}></div>
          <div className="modal-image-right">
              <div className="modal-right-column">
                <div className="modal-image-header">
                    {/* Close Button */}
                    <button className="modal-close-image" onClick={onClose}>
                        <img src="./../Assets/Arrow.svg" alt="" />BACK
                    </button>
                    <button className="modal-close-image-2" onClick={onClose}>
                        SHARE<img src="./../Assets/Arrow-2.svg" alt="" />
                    </button>
                </div>
                <div className="modal-right-buttons">
                    <button className={`tab-1 ${activeTab === 1 ? 'active-modal' : ''}`} onClick={() => handleTabClick(1)}>DESCRIPTION</button>
                    <button className={`tab-2 ${activeTab === 2 ? 'active-modal' : ''}`} onClick={() => handleTabClick(2)}>ARTIST</button>
                    <button className={`tab-3 ${activeTab === 3 ? 'active-modal' : ''}`} onClick={() => handleTabClick(3)}>ORDER INFO</button>
                </div>
                {/* TAB 1 _______________________________________________ */}
                {activeTab === 1 && 
                    <div className="modal-right-tab-1">
                        <h2>“Graceful Strength”</h2>
                        <p>
                        In the heart of a lush, tranquil forest, sunlight filters through the dense canopy, 
                        creating dappled patterns on the forest floor. Towering trees, their trunks adorned 
                        with vibrant green moss, stand tall and majestic, while a gentle breeze rustles the 
                        leaves overhead. </p>
                        <p> <br />
                        A small, meandering stream glistens in the soft light, its crystal-clear waters 
                        reflecting the surrounding greenery. The symphony of nature's sounds fills the air, 
                        with birdsong and the distant murmur of flowing water. This enchanting woodland scene 
                        invites you to escape into the serenity of nature's embrace</p>
                    </div>
                }
                {/* TAB 2 _______________________________________________ */}
                {activeTab === 2 && 
                    <div className="modal-right-tab-2">
                      <div className="ontop-slide-title">
                          <h3>Sarah Young</h3>
                          <p>Sarah Young stands as a celebrated figure in the art world, her canvases adorning the walls of galleries and museums around the globe. Her journey through colors and canvases continues to inspire aspiring artists and art enthusiasts alike, reminding us all of the transformative power of art.</p>
                      </div>
                      <ReactSimplyCarousel
                              containerProps={{
                                style: {
                                  width: "97%",
                                  justifyContent: "space-between",
                                  marginLeft: "3%",
                                }
                              }}
                              activeSlideIndex={activeSlideIndex}
                              onRequestChange={setActiveSlideIndex}
                              itemsToShow={3}
                              itemsToScroll={2}
                              speed={400}
                              easing="linear"
                            >
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/1.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/4.jpg)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/2-vid.gif)`}}></div>
                              <div className='hoverSlide' style={{ backgroundImage: `url(Assets/3.jpg)`}}></div>
                      </ReactSimplyCarousel>
                    </div>
                }
                {/* TAB 3 _______________________________________________ */}
                {activeTab === 3 && 
                    <div className="modal-right-tab-3">
                        <div className="tab-3-top">
                          <div className="tab-3-titles">
                            <h3>“Graceful Strength”</h3>
                            <p>Sarah Young</p>
                          </div>
                          <div className="price-title">
                            <p><span className='green-before'>⬤</span> Price now</p>
                            <p>Previous price</p>
                          </div>
                          <div className="under-price-title">
                            <p>7.2 ETH</p>
                            <p>6.5 eth <br /> 6.0 eth <br /> 5.2 eth</p>
                          </div>
                        </div>
                        <div className="tab-3-form">
                          <input type="text" placeholder='YOUR EMAIL'/>
                          <button>order now</button>
                        </div>
                    </div>
                }
              </div>
              <div className="modal-right-footer">
                  <a href="google.com">Join us on discord</a>
                  <a href="google.com">PRIVACY POLICY</a>
              </div>
          </div>
        </div>
      </div>

    </>
  );
}
