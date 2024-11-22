import { useState, useEffect } from "react";
import BackgroundImage from "../assets/pictures/Invite.JPG";
import BackgroundImage2 from "../assets/pictures/Invite2.png";

const Invitation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 lg:block hidden bg-cover bg-no-repeat bg-top bg-fixed saturate-[0.95]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      ></div>

      <div
        className="absolute inset-0 block lg:hidden bg-no-repeat bg-left-top bg-fill bg-fixed saturate-[0.95]"
        style={{
          backgroundImage: `url(${BackgroundImage2})`,
        }}
      ></div>

      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-end w-full h-full text-white bg-black bg-opacity-30">
        <h1
          className="text-[40px] lg:text-[50px] inter-bold font-bold"
          style={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 0.4)", // Add shadow effect
          }}
        >
          You're{" "}
          <span
            className="bg-violet-500 px-2"
            style={{
              textShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // Add shadow effect
              boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Invited
          </span>
        </h1>
        <p
          className="text-[13px] lg:text-xl inter-light text-violet-100 opacity-70"
          style={{
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.4)", // Lighter shadow for paragraph
          }}
        >
          Join us for a memorable celebration of togetherness.
        </p>

        <div className="w-full h-[150px] lg:h-[70px] bottom-0 bg-gradient-to-b from-transparent to-purple-300 opacity-50 mt-5"></div>
      </div>
    </div>
  );
};

export default Invitation;
