import { useRef, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/Favicon.svg";
import Baby1 from "../assets/pictures/1.jpeg";
import Baby2 from "../assets/pictures/2.jpeg";
import Baby3 from "../assets/pictures/3.jpeg";
import Baby4 from "../assets/pictures/4.jpeg";
import Baby5 from "../assets/pictures/5.jpeg";
import Baby6 from "../assets/pictures/6.jpeg";
import Baby7 from "../assets/pictures/7.jpeg";
import Baby8 from "../assets/pictures/8.jpeg";
import Baby9 from "../assets/pictures/9.jpeg";
import Baby10 from "../assets/pictures/10.jpeg";
import Baby11 from "../assets/pictures/11.jpg";
import Baby12 from "../assets/pictures/12.jpeg";

const Timeline = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const logoRef = useRef<SVGCircleElement | null>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);

  const calculatePosition = (progressRatio: number) => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(
        progressRatio * pathLength
      );
      setIconPosition({ x: point.x, y: point.y });
    }
  };

  const handleScroll = () => {
    if (pathRef.current) {
      const pathLength = pathRef.current.getTotalLength();
      const pathBoundingBox = pathRef.current.getBoundingClientRect();
      const middleOfScreen = window.innerHeight / 2;

      const relativeMiddle = middleOfScreen - pathBoundingBox.top;

      if (relativeMiddle >= 0 && relativeMiddle <= pathBoundingBox.height) {
        const progressRatio = Math.min(
          Math.max(relativeMiddle / pathBoundingBox.height, 0),
          1
        );
        setProgress(progressRatio);
        calculatePosition(progressRatio);

        const point = pathRef.current.getPointAtLength(
          progressRatio * pathLength
        );
        setIconPosition({ x: point.x, y: point.y });
      }
    }
  };

  useEffect(() => {
    // Calculate initial position on component mount
    if (pathRef.current) {
      calculatePosition(0); // Default progress at the start of the path
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    calculatePosition(progress); // Recalculate position whenever progress updates
  }, [progress]);

  return (
    <>
      <div className="bg-violet-900">
        <div className="relative w-[1200px] mx-auto h-[5320px] overflow-hidden pt-20 flex gap-x-10 justify-between items-start">
          <div className="w-full h-full">
            <div className="h-[250px] w-full pt-8">
              <h1 className="bg-pink-300 w-[186px] px-2 ml-2 inter-bold rotate-1 text-[46px] text-violet-900">
                Kieron's
              </h1>
              <h1 className="text-white inter-medium text-[38px] -rotate-3 flex justify-start">
                One year of
                <span className="bg-pink-100 px-2 ml-2 text-violet-900">
                  journey
                </span>
              </h1>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden">
              <img src={Baby2} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    First
                  </span>
                  Milestone
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Tiny Kieron lying peacefully on a red carpet, already stealing
                  hearts with his innocence. A bundle of joy who makes every
                  moment special.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby4} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  Hats Off to
                  <span className="bg-clip-text ml-1.5 text-fuchsia-300">
                    Cuteness
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron rocking a hat and flashing the most adorable smile,
                  proving he’s a natural charmer in every way.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby6} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    Best Friends
                  </span>
                  Forever
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron with his furry friend DeFi, sharing a bond so pure and
                  full of love. A friendship that grows stronger every day.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby8} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  Golden Hour
                  <span className="bg-clip-text ml-1.5 text-fuchsia-300">
                    Glow
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron basking in the beauty of a sunset, radiating warmth and
                  filling the world with his gentle presence.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby10} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  Autumn's Little
                  <span className="bg-clip-text ml-1.5 text-fuchsia-300">
                    Wonder
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Among the golden leaves of a tree, Kieron looks like a tiny
                  explorer discovering the beauty of the changing seasons.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby12} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    Nature’s
                  </span>
                  Little Star
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Sitting in the grass, Kieron embraces the beauty of the
                  outdoors, a perfect blend of innocence and wonder.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden select-none min-w-[260px] -mt-52 max-w-[260px] flex justify-center">
            <svg
              className="timeline-svg"
              viewBox="0 0 200 4260"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient
                  id="gradient-tail"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="40%"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Main Timeline Path */}
              <path
                ref={pathRef}
                d="M125 200 
   Q 125 260, 100 360 
   T 100 560 
   T 100 760 
   T 100 960 
   Q 125 1060, 125 1100 
   Q 125 1160, 100 1260 
   T 100 1460 
   T 100 1660 
   T 100 1860 
   Q 125 1960, 125 2000 
   Q 125 2060, 100 2160 
   T 100 2360 
   T 100 2560 
   T 100 2760 
   Q 125 2860, 125 2900 
   Q 125 2960, 100 3060 
   T 100 3260 
   T 100 3460 
   T 100 3660 
   Q 125 3760, 125 3800 
   Q 125 3860, 100 3960 
   T 76 4090 
   "
                style={{
                  fill: "none",
                  stroke: "#c4b5fd",
                  strokeWidth: 2,
                  opacity: 0.2,
                }}
              />

              {/* Tail Effect */}
              {pathRef.current && (
                <path
                  d="M125 200 
                Q 125 260, 100 360 
                T 100 560 
                T 100 760 
                T 100 960 
                Q 125 1060, 125 1100 
                Q 125 1160, 100 1260 
                T 100 1460 
                T 100 1660 
                T 100 1860 
                Q 125 1960, 125 2000 
                Q 125 2060, 100 2160 
                T 100 2360 
                T 100 2560 
                T 100 2760 
                Q 125 2860, 125 2900 
                Q 125 2960, 100 3060 
                T 100 3260 
                T 100 3460 
                T 100 3660 
                Q 125 3760, 125 3800 
                Q 125 3860, 100 3960 
                  T 76 4090"
                  style={{
                    fill: "none",
                    stroke: "url(#gradient-tail)",
                    strokeWidth: 2,
                    strokeDasharray: `${
                      progress * pathRef.current.getTotalLength()
                    }, ${pathRef.current.getTotalLength()}`,
                  }}
                />
              )}

              {/* Moving Logo */}
              <g
                ref={logoRef}
                className="timeline-logo"
                style={{
                  transform: `translate(${iconPosition.x - 21}px, ${
                    iconPosition.y - 21
                  }px)`,
                  transformOrigin: "center center",
                  zIndex: 9999,
                  position: "absolute",
                }}
              >
                <Logo width={42} height={42} />
              </g>
            </svg>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby1} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  The Journey
                  <span className="bg-clip-text ml-1.5 text-fuchsia-300">
                    Begins
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron Rodriguez was born on 29th December 2023, a moment that
                  brought endless joy and love to this world. Welcome, little
                  miracle!
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby3} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    Little
                  </span>
                  Genius in the Making
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron exploring the world of ideas with an Elon Musk book in
                  hand. Who knows, he might just be the next big thinker!
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby5} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    Laid-Back
                  </span>
                  Vibes
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  With a casual look, Kieron is lying on a bed, showing that
                  even babies have their cool moments. Style comes naturally to
                  him!
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby7} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    Splashes
                  </span>
                  of Fun
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron enjoying the vibrant colors of a swimming pool balloon,
                  ready to dive into new adventures and laughter.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
              <img src={Baby9} alt="" className="" />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-fuchsia-300">
                    Sky’s
                  </span>
                  the Limit
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron with a vast sky as his backdrop, reminding us that his
                  dreams and potential know no boundaries.
                </p>
              </div>
              <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
                <img src={Baby11} alt="" className="" />
                <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                  <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                    Reaching New
                    <span className="bg-clip-text ml-1.5 text-fuchsia-300">
                      Heights
                    </span>
                  </h1>
                  <p className="text-white text-opacity-50 mt-2">
                    With his tiny hands placed on a sofa, Kieron shows
                    determination and curiosity, growing stronger and more
                    confident every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
