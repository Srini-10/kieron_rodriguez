import { useState, useEffect, useRef } from "react";
import Mute from "../assets/icons/Mute.svg";
import UnMute from "../assets/icons/UnMute.svg";
import FullScreen from "../assets/icons/FullScreen.svg";

const Video = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState(0); // Video duration
  const [currentTime, setCurrentTime] = useState(0); // Current playback time
  const [isFullScreen, setIsFullScreen] = useState(false); // Fullscreen state
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMuteToggle = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handleFullScreen = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).webkitRequestFullscreen) {
        (videoElement as any).webkitRequestFullscreen(); // Safari
      } else if ((videoElement as any).msRequestFullscreen) {
        (videoElement as any).msRequestFullscreen(); // IE/Edge
      } else {
        console.error("Fullscreen API is not supported in this browser.");
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Set duration when metadata is loaded
      videoElement.onloadedmetadata = () => {
        setDuration(videoElement.duration);
      };

      // Update time as video plays
      videoElement.ontimeupdate = handleTimeUpdate;

      // Detect fullscreen change
      const onFullScreenChange = () => {
        const isFullScreen =
          document.fullscreenElement ||
          (document as any).webkitFullscreenElement ||
          (document as any).msFullscreenElement;
        setIsFullScreen(!!isFullScreen);

        // If exiting fullscreen and video is paused, play the video
        if (!isFullScreen && videoElement.paused) {
          videoElement.play();
        }
      };

      document.addEventListener("fullscreenchange", onFullScreenChange);
      document.addEventListener("webkitfullscreenchange", onFullScreenChange);
      document.addEventListener("msfullscreenchange", onFullScreenChange);

      return () => {
        document.removeEventListener("fullscreenchange", onFullScreenChange);
        document.removeEventListener(
          "webkitfullscreenchange",
          onFullScreenChange
        );
        document.removeEventListener("msfullscreenchange", onFullScreenChange);
      };
    }
  }, []);

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <>
      <div className="w-[94vw] lg:max-w-[1440px] mx-auto mt-0 lg:mt-10 h-[240px] lg:h-[680px] overflow-hidden flex justify-center items-start">
        <div className="relative cursor-pointer">
          <video
            ref={videoRef}
            className="rounded-t-xl lg:rounded-t-3xl shadow-[0_-5px_10px_-12px_rgba(0,0,0,0.3)] cursor-pointer group lg:w-[1100px] mx-auto"
            muted={isMuted}
            loop
            controls={false}
            playsInline
            autoPlay
            onClick={handleMuteToggle}
          >
            <source
              src="https://webcdn.synthesia.io/HomeHeroVideos/02.08.24/Alex_NEW_WBHERO_comp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Mute Button */}
          {!isFullScreen && (
            <button
              onClick={handleMuteToggle}
              className="absolute top-2.5 left-2.5 lg:top-8 lg:left-8 flex items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white p-[3px] lg:p-[5px] rounded-full lg:hover:bg-opacity-100 transition-all duration-1000 ease-in-out group"
            >
              <div className="w-7 h-7 lg:w-14 lg:h-14 p-[5px] lg:p-0 flex items-center justify-center bg-white border border-gray-200 rounded-full transition-all duration-1000 ease-in-out">
                {isMuted ? (
                  <img src={UnMute} alt="" />
                ) : (
                  <img src={Mute} alt="" />
                )}
              </div>
              <div
                className="hidden lg:block relative overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-1000 ease-in-out"
                style={{ width: "fit-content" }}
              >
                <span className="text-sm lg:text-md font-semibold pl-3 pr-4 whitespace-nowrap">
                  {isMuted ? "Listen" : "Mute"}
                </span>
              </div>
            </button>
          )}

          {/* Full Screen Button */}
          {!isFullScreen && (
            <button
              onClick={handleFullScreen}
              className="absolute bottom-4 right-3 lg:bottom-5 lg:right-5 w-10 h-10 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out"
            >
              <div className="w-8 h-8 hover:w-10 hover:h-10 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
                <img src={FullScreen} className="w-5" alt="" />
              </div>
            </button>
          )}

          {/* Video Duration Loader */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-200 bg-opacity-50">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-r-xl transition-all ease-linear"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
