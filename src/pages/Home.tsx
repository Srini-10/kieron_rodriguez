import React, { useState, useEffect, useRef } from "react";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Invitation from "../components/Invitation";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import Timeline from "../components/Timeline";
import TimelineMobile from "../components/TimelineMobile";
import Video from "../components/Video";

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null); // Define the type of ref

  // Handle scroll event to toggle button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setShowButton(scrollContainerRef.current.scrollTop > 300);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div
        ref={scrollContainerRef}
        className="max-w-full h-screen overflow-y-scroll relative"
      >
        <Navbar />
        <Header />
        <Video />
        <div className="hidden lg:block">
          <Timeline />
        </div>
        <div className="lg:hidden">
          <TimelineMobile />
        </div>
        <Quote />
        <Gallery />
        <Invitation />
        <Contact />
        <Location />

        <div className="min-w-full h-12 bg-violet-950 flex justify-center items-center">
          <h1 className="inter-medium text-[16px] lg:text-[17px] text-white opacity-85 uppercase">
            Kieron Rodriguez
          </h1>
        </div>

        {/* Go to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed z-[9999999] bottom-5 right-5 lg:bottom-6 lg:right-8 w-10 h-10 border-violet-50 border-opacity-30 border-[1px] bg-violet-600 text-white flex justify-center items-center rounded-full shadow-lg hover:bg-violet-700 transition-opacity duration-300 ease-in-out`}
          style={{
            opacity: showButton ? 1 : 0,
            pointerEvents: showButton ? "auto" : "none",
          }}
        >
          ↑
        </button>
      </div>
    </>
  );
};

export default Home;
