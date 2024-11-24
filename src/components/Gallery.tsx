import { useState, useRef } from "react";
import FullScreen from "../assets/icons/FullScreen.svg";
import Minimize from "../assets/icons/Minimize.svg";
import LeftArrow from "../assets/icons/LeftArrow.svg";
import RightArrow from "../assets/icons/RightArrow.svg";

import Image1 from "../assets/pictures/1.jpeg";
import Image2 from "../assets/pictures/2.jpeg";
import Image3 from "../assets/pictures/3.jpeg";
import Image4 from "../assets/pictures/4.jpeg";
import Image5 from "../assets/pictures/5.jpeg";
import Image6 from "../assets/pictures/6.jpeg";
import Image7 from "../assets/pictures/7.jpeg";
import Image8 from "../assets/pictures/8.jpeg";
import Image9 from "../assets/pictures/9.jpeg";
import Image10 from "../assets/pictures/10.jpeg";

// Import your images into an array
const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
];

const Gallery = () => {
  const [isFullScreen, setIsFullScreen] = useState(false); // Fullscreen state
  const [activeImage, setActiveImage] = useState<string | null>(null); // Track which image is fullscreen
  const imageRef = useRef<HTMLDivElement>(null); // Reference for fullscreen
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleFullScreen = async (index: number) => {
    setActiveIndex(index);
    setIsFullScreen(true);
    try {
      // Request fullscreen for the entire document
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.error("Failed to enter fullscreen mode:", error);
    }
  };

  const handleMinimize = async () => {
    setIsFullScreen(false);
    setActiveImage(null);
    try {
      // Exit fullscreen
      if (document.fullscreenElement && document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Failed to exit fullscreen mode:", error);
    }
  };

  const goToNext = () => {
    if (activeIndex !== null && activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (activeIndex !== null && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="w-full lg:w-[1280px] h-[540px] lg:h-[700px] overflow-hidden mx-auto lg:p-0 px-[4vw] flex flex-col justify-center">
      <h1 className="text-black inter-bold w-auto text-[30px] lg:text-[50px] leading-10 lg:leading-none lg:flex justify-start items-center">
        Take a closer look at{" "}
        <span className="text-[25px] lg:text-[50px] flex items-center justify-start lg:ml-2.5">
          our{" "}
          <span className="bg-violet-500 text-white px-1.5 lg:px-2 mx-1 lg:mx-2.5 text-[25px] lg:text-[53px] lg:py-2">
            togetherness.
          </span>
        </span>
      </h1>
      <div className="w-full h-[300px] lg:h-[400px] flex justify-start items-center gap-x-5 overflow-x-scroll snap-x custom-scrollbar transition-all duration-300 lg:duration-1000 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            ref={activeImage === image ? imageRef : null} // Attach ref only to the active image
            className="lg:min-w-[412px] lg:max-w-[412px] min-w-[92vw] h-[240px] lg:h-[300px] flex justify-start items-center gap-x-5 snap-start lg:snap-center transition-all duration-300 lg:duration-1000 ease-in-out"
          >
            <div className="w-full h-full border-[1.5px] border-violet-200 rounded-lg p-4 overflow-hidden relative">
              <img
                src={image}
                className="top-0 left-0 w-full h-full object-cover rounded-lg"
                alt={`Image_${index + 1}`}
              />

              {/* Full Screen Button */}
              {!isFullScreen && (
                <button
                  onClick={() => handleFullScreen(index)}
                  className="absolute bottom-6 right-6 w-10 h-10 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out"
                >
                  <div className="w-8 h-8 hover:w-10 hover:h-10 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
                    <img src={FullScreen} className="w-5" alt="Fullscreen" />
                  </div>
                </button>
              )}

              {/* Minimize Button */}
              {isFullScreen && activeIndex !== null && (
                <button
                  onClick={handleMinimize}
                  className="absolute bottom-6 lg:bottom-0 lg:top-6 right-6 w-10 h-10 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out"
                >
                  <div className="w-8 h-8 hover:w-10 hover:h-10 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
                    <img src={Minimize} className="w-5" alt="Minimize" />
                  </div>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image View */}
      {isFullScreen && activeIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50">
          <img
            src={images[activeIndex]}
            className="max-w-full max-h-full object-contain"
            alt="Fullscreen View"
          />
          <button
            onClick={handleMinimize}
            className="absolute bottom-6 lg:bottom-0 lg:top-6 right-6 w-10 h-10 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out"
          >
            <div className="w-8 h-8 hover:w-10 hover:h-10 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
              <img src={Minimize} className="w-5" alt="Minimize" />
            </div>
          </button>

          {/* Navigation Buttons */}
          {activeIndex > 0 && (
            <button
              onClick={goToPrevious}
              className="absolute left-[125px] lg:left-6 bottom-[30px] lg:bottom-0 lg:top-1/2  transform -translate-y-1/2 w-12 h-12 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out"
            >
              <div className="w-10 h-10 hover:w-12 hover:h-12 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
                <img src={LeftArrow} className="w-6" alt="Previous" />
              </div>
            </button>
          )}
          {activeIndex < images.length - 1 && (
            <button
              onClick={goToNext}
              className="absolute right-[125px] lg:right-6 bottom-[30px] lg:bottom-0 lg:top-1/2 transform -translate-y-1/2 w-12 h-12 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out"
            >
              <div className="w-10 h-10 hover:w-12 hover:h-12 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
                <img src={RightArrow} className="w-6" alt="Next" />
              </div>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
