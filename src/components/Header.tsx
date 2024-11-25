import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Header = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrame: number;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1, // Ease the transition
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(updateSmoothPosition);
    };

    animationFrame = requestAnimationFrame(updateSmoothPosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const calculateTransform = (offsetX: number, offsetY: number): string => {
    return `translate(${smoothPosition.x * offsetX}px, ${
      smoothPosition.y * offsetY
    }px)`;
  };

  const curves = [
    "M0,-60 C100,-58, 200,-58, 360,-60",
    "M0,-40 C100,-38, 200,-38, 360,-40",
    "M0,-20 C100,-18, 200,-18, 360,-20",
    "M0,0 C100,2, 200,2, 360,0",
    "M0,20 C100,22, 200,22, 360,20",
    "M0,40 C100,42, 200,42, 360,40",
    "M0,60 C100,62, 200,62, 360,60",
    "M0,80 C100,82, 200,82, 360,80",
    "M0,100 C100,98, 200,98, 360,100",
    "M0,120 C100,114, 200,114, 360,120",
  ];

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="w-full mx-auto lg:h-[681px] mt-16 lg:mt-0 overflow-hidden flex justify-center relative items-center"
      >
        <div className="w-full h-full absolute -z-20">
          <svg
            viewBox="0 0 360 50"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0 w-full h-full"
          >
            {curves.map((curve, index) => (
              <path
                key={index}
                d={curve}
                stroke="#fbf8ff"
                strokeWidth="0.5"
                fill="transparent"
                className="animate-line -rotate-2 -translate-x-0.5"
              />
            ))}
          </svg>
        </div>

        <div className="w-[330px] lg:w-[1400px] mx-auto h-[500px] lg:h-full absolute -mt-32 lg:mt-0 bg-white bg-opacity-10">
          <img
            src={"https://i.ibb.co/cN5Zpgc/17.png"}
            className="w-[20px] lg:w-[50px] absolute top-10 left-[260px] lg:left-96 transition-transform duration-1000 ease-out"
            style={{ transform: calculateTransform(0.01, 0.01) }}
            alt=""
          />
          <img
            src={"https://i.ibb.co/bHF2dPN/21.png"}
            className="w-[30px] lg:w-[70px] absolute top-20 right-32 transition-transform duration-1000 ease-out"
            style={{ transform: calculateTransform(-0.02, 0.01) }}
            alt=""
          />
          <img
            src={"https://i.ibb.co/X8yx8hb/19.png"}
            className="w-[20px] rotate-12 absolute bottom-16 left-[315px] lg:left-64 transition-transform duration-1000 ease-out"
            style={{ transform: calculateTransform(0.015, -0.015) }}
            alt=""
          />
          <img
            src={"https://i.ibb.co/sRjxmjc/18.png"}
            className="w-[15px] lg:w-[50px] absolute bottom-32 lg:right-32 transition-transform duration-1000 ease-out"
            style={{ transform: calculateTransform(-0.01, -0.02) }}
            alt=""
          />
          <img
            src={"https://i.ibb.co/f9kbmFh/20.png"}
            className="w-[30px] lg:w-[60px] rotate-90 absolute bottom-6 lg:right-1/3 transition-transform duration-1000 ease-out"
            style={{ transform: calculateTransform(0.02, -0.01) }}
            alt=""
          />
        </div>

        <div className="w-[1440px] flex flex-col lg:flex-row justify-between items-center mx-auto">
          {/* Content */}
          <div className="lg:min-w-[560px] overflow-hidden h-full relative flex justify-center items-center z-10">
            <img
              className="w-[320px] lg:min-w-[600px] saturate-[1.3] mt-0 lg:ml-28"
              src={"https://i.ibb.co/qxLkRdY/baby3.png"}
              alt=""
            />

            {/* Background image */}
            <img
              className="absolute lg:top-[-15px] lg:left-10 top-[-8px] left-[0px] w-[84px] lg:w-[160px] object-cover rotate-[-87deg] lg:rotate-[-86deg] z-10" // Absolute positioning for background image
              src={"https://i.ibb.co/fFdK6L5/24.png"}
              alt=""
            />
            <img
              className="absolute lg:top-[86px] lg:left-[450px] top-[47px] left-[220px] w-[60px] lg:w-[110px] saturate-150 object-cover rotate-[-6deg] z-10" // Absolute positioning for background image
              src={"https://i.ibb.co/WzqCVMD/25.png"}
              alt=""
            />
          </div>

          {/* Another section */}
          <div className="w-full h-full flex justify-center items-center lg:mt-0 mt-5">
            <div className="relative w-full h-[340px]">
              <h1 className="relative text-[19px] lg:text-[40px] text-center inter-extrabold z-10">
                We invite you to{" "}
                <span className="bg-violet-600 text-white px-1 lg:px-2">
                  celebrate
                </span>
              </h1>
              <p className="text-[19px] lg:text-[40px] text-center inter-extrabold mt:0.5 lg:mt-1 flex justify-center items-center z-10">
                <span className="text-violet-600 underline">
                  Kieron Rodriguez's
                </span>{" "}
                <span className="flex items-center lg:items-start justify-center mx-1.5 lg:mx-3">
                  f
                  <span className="w-1.5 lg:w-3 h-[36px] lg:h-[45px] overflow-hidden">
                    <img
                      src={"https://i.ibb.co/z8FJQ3F/Kieron-Rodriguez.png"}
                      className="h-full scale-[0.5] lg:scale-[1.5] w-auto lg:mt-[5px] object-cover"
                      alt=""
                    />
                  </span>
                  rst
                </span>
                <span className="bg-rose-100 px-1 lg:px-2 lg:-mx-2 relative inline-block">
                  Birthday.{" "}
                  <img
                    src={"https://i.ibb.co/q5JVVbK/26.png"}
                    alt=""
                    className="absolute top-[-38px] lg:top-[-103px] rotate-6 right-[-20px] lg:right-[-83px] w-12 lg:w-32 -z-10"
                  />
                </span>
              </p>

              <div className="w-[300px] lg:w-[500px] gap-x-8 mx-auto mt-16 lg:mt-20 z-50 gap-y-3 lg:gap-y-0 flex flex-col lg:flex-row justify-between items-center">
                <Button className="bg-violet-700 h-12 lg:h-16 w-full rounded-lg text-[17px] text-white flex justify-center items-center gap-x-3 font-bold">
                  Let's Celebrate{" "}
                  <img
                    className="rotate-90 right-0 w-8 lg:w-10"
                    src={"https://i.ibb.co/4pDtqPQ/2.png"}
                    alt=""
                  />
                </Button>
                <Button className="bg-transparent border-[1px] border-violet-300 h-12 w-full rounded-lg flex justify-center items-center gap-x-3 text-[17px] text-black font-bold">
                  See our Gallery{" "}
                  <img
                    className="right-0 w-8 lg:w-10"
                    src={"https://i.ibb.co/n18WTkT/16.png"}
                    alt=""
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
