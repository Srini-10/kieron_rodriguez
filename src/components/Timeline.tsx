import { useRef, useEffect, useState } from "react";

const Timeline = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const logoRef = useRef<SVGCircleElement | null>(null);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const calculatePosition = (progressRatio: number) => {
    if (pathRef.current && !isAtEnd) {
      // Skip calculation if locked
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(
        progressRatio * pathLength
      );
      setIconPosition({ x: point.x, y: point.y });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
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

        if (progressRatio === 1) {
          // Lock the position at the endpoint
          const endPoint = pathRef.current.getPointAtLength(pathLength);
          setIconPosition({ x: endPoint.x, y: endPoint.y });
          setIsAtEnd(true);
        } else {
          setIsAtEnd(false);
          calculatePosition(progressRatio);
        }
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
  }, [calculatePosition, handleScroll]);

  useEffect(() => {
    if (!isAtEnd) {
      calculatePosition(progress); // Recalculate when progress updates
    }
  }, [progress, isAtEnd, calculatePosition]);

  return (
    <>
      <div
        id="story"
        className="bg-gradient-to-b to-[#710201] via-[#900303] from-[#a30100]"
      >
        <div className="relative w-[1200px] mx-auto h-[5160px] overflow-hidden pt-20 flex gap-x-10 justify-between items-start">
          <div className="w-full h-full">
            <div className="h-[250px] w-full pt-8">
              <h1 className="bg-rose-300 w-[186px] px-2 ml-2 inter-bold rotate-1 text-[46px] text-red-800">
                Kieron's
              </h1>
              <h1 className="text-white inter-medium text-[38px] -rotate-3 flex justify-start">
                One year of
                <span className="bg-rose-100 px-2 ml-2 text-red-800">
                  journey
                </span>
              </h1>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden">
              <img
                src={"https://i.ibb.co/6rrT11Q/2.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
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
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/hC9hdY2/4.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  Hats Off to
                  <span className="bg-clip-text ml-1.5 text-rose-300">
                    Cuteness
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron rocking a hat and flashing the most adorable smile,
                  proving he’s a natural charmer in every way.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/KNknKp6/6.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
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
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/D5kYh6f/8.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  Golden Hour
                  <span className="bg-clip-text ml-1.5 text-rose-300">
                    Glow
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron basking in the beauty of a sunset, radiating warmth and
                  filling the world with his gentle presence.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/gSNQHPQ/10.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  Autumn's Little
                  <span className="bg-clip-text ml-1.5 text-rose-300">
                    Wonder
                  </span>
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Among the golden leaves of a tree, Kieron looks like a tiny
                  explorer discovering the beauty of the changing seasons.
                </p>
              </div>
            </div>
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/4tDPG7z/12.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
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
                  <stop offset="0%" stopColor="#710201" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#900303" stopOpacity="1" />
                  <stop offset="100%" stopColor="#900303" stopOpacity="1" />
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
                "
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
                <image
                  href={require("../assets/Cap.png")}
                  className="w-[42px] h-[42px] unselectable"
                />
              </g>
            </svg>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/xqJGssx/1.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  The Journey
                  <span className="bg-clip-text ml-1.5 text-rose-300">
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
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/vzkty0Z/3.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
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
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/Y3Y0vNv/5.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
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
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/yfyTMty/7.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
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
            <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
              <img
                src={"https://i.ibb.co/QJw0F1m/9.jpg"}
                alt=""
                className="unselectable"
              />
              <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                  <span className="bg-clip-text mr-1.5 text-rose-300">
                    Sky’s
                  </span>
                  the Limit
                </h1>
                <p className="text-white text-opacity-50 mt-2">
                  Kieron with a vast sky as his backdrop, reminding us that his
                  dreams and potential know no boundaries.
                </p>
              </div>
              <div className="w-full h-auto rounded-xl overflow-hidden mt-[20px]">
                <img
                  src={"https://i.ibb.co/02w9R3b/11.jpg"}
                  alt=""
                  className="unselectable"
                />
                <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
                  <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                    Reaching New
                    <span className="bg-clip-text ml-1.5 text-rose-300">
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
