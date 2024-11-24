import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import Pop from "../assets/pop.svg";
import Gallery from "../assets/gallery.svg";
import Cap from "../assets/cap.svg";
import Candle from "../assets/candle.svg";
import P1 from "../assets/pop1.svg";
import P2 from "../assets/pop2.svg";
import P3 from "../assets/pop3.svg";
import P4 from "../assets/pop4.svg";
import P5 from "../assets/pop5.svg";

const Header2 = () => {
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
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-[calc(100vh-104px)] overflow-hidden"
    >
      {/* SVG Animated Lines */}
      <div className="w-full h-full absolute z-0">
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

      {/* Animated Images */}
      <div className="w-full h-full absolute z-50 bg-white bg-opacity-10">
        <img
          src={P1}
          className="w-[50px] absolute top-32 left-32 transition-transform duration-1000 ease-out"
          style={{ transform: calculateTransform(0.01, 0.01) }}
          alt="Top Left"
        />
        <img
          src={P4}
          className="w-[70px] absolute top-20 right-32 transition-transform duration-1000 ease-out"
          style={{ transform: calculateTransform(-0.02, 0.01) }}
          alt="Top Right"
        />
        <img
          src={P3}
          className="w-[60px] rotate-12 absolute bottom-40 left-64 transition-transform duration-1000 ease-out"
          style={{ transform: calculateTransform(0.015, -0.015) }}
          alt="Bottom Left"
        />
        <img
          src={P2}
          className="w-[50px] absolute bottom-32 right-32 transition-transform duration-1000 ease-out"
          style={{ transform: calculateTransform(-0.01, -0.02) }}
          alt="Bottom Right"
        />
        {/* <img
          src={P5}
          className="w-[60px] rotate-90 absolute bottom-6 right-1/3 transition-transform duration-1000 ease-out"
          style={{ transform: calculateTransform(0.02, -0.01) }}
          alt="Center"
        /> */}
      </div>

      {/* Main Content */}
      <div className="relative w-full h-full pt-32">
        <h1 className="relative text-[66px] text-center rotate-1 inter-extrabold z-10">
          We invite you to{" "}
          <span className="bg-violet-600 text-white -mx-2 px-2">celebrate</span>
        </h1>
        <p className="text-[66px] text-center inter-extrabold -rotate-2 mt-1 flex justify-center items-center">
          <span className="text-violet-600 underline">Kieron Rodriguez's</span>{" "}
          <span className="flex mx-5">
            f
            <span className="w-3 h-[80px] overflow-hidden">
              <img
                src={Candle}
                className="h-full w-auto ml-0.5 mt-[2px] object-cover"
                alt=""
              />
            </span>
            rst
          </span>
          <span className="bg-rose-100 px-2 -mx-2 relative inline-block">
            Birthday.{" "}
            <img
              src={Cap}
              alt="Birthday Cap"
              className="absolute top-[-43px] rotate-6 right-[-38px] w-28 h-28"
            />
          </span>
        </p>

        <div className="w-[500px] gap-x-8 mx-auto mt-32 flex justify-between items-center">
          <Button className="bg-violet-700 h-16 w-full rounded-lg text-[17px] text-white flex justify-center items-center gap-x-3 font-bold">
            Let's Celebrate{" "}
            <img className="rotate-90 right-0 w-10" src={Pop} alt="Pop" />
          </Button>
          <Button className="bg-transparent border-[1px] border-violet-300 h-16 w-full rounded-lg flex justify-center items-center gap-x-3 text-[17px] text-black font-bold">
            See our Gallery{" "}
            <img className="right-0 w-10" src={Gallery} alt="Gallery" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
