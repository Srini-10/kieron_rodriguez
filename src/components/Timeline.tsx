import { useRef, useEffect, useState } from "react";
import { ReactComponent as Logo } from "../assets/icons/Favicon.svg";
import Baby1 from "../assets/pictures/1.jpeg";
import Baby2 from "../assets/pictures/2.jpeg";
import Baby3 from "../assets/pictures/3.jpeg";
import Baby4 from "../assets/pictures/4.jpeg";
import Baby5 from "../assets/pictures/5.jpeg";
import Baby6 from "../assets/pictures/6.jpeg";

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
      <div className="relative w-full h-[3000px] overflow-hidden bg-violet-900 px-28 pt-20 flex gap-x-10 justify-between items-start">
        <div className="w-full h-full">
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[250px]">
            <img src={Baby2} alt="" className="" />
            <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
              <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                <span className="bg-clip-text mr-1.5 text-transparent bg-violet-400">
                  Test
                </span>
                and verify your checks
              </h1>
              <p className="text-white text-opacity-50 mt-2">
                Test your resources from your local machine or during deployment
                in CI, all running on Checkly’s global infrastructure.
              </p>
            </div>
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
            <img src={Baby4} alt="" className="" />
            <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
              <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                <span className="bg-clip-text mr-1.5 text-transparent bg-violet-400">
                  Test
                </span>
                and verify your checks
              </h1>
              <p className="text-white text-opacity-50 mt-2">
                Test your resources from your local machine or during deployment
                in CI, all running on Checkly’s global infrastructure.
              </p>
            </div>
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
            <img src={Baby5} alt="" className="" />
            <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
              <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                <span className="bg-clip-text mr-1.5 text-transparent bg-violet-400">
                  Test
                </span>
                and verify your checks
              </h1>
              <p className="text-white text-opacity-50 mt-2">
                Test your resources from your local machine or during deployment
                in CI, all running on Checkly’s global infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden select-none min-w-[260px] -mt-52 max-w-[260px] flex justify-center">
          <svg
            className="timeline-svg"
            viewBox="0 0 200 2360"
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
              d="M125 200 Q 125 260, 100 360 T 100 560 T 100 760 T 100 960 Q 125 1060, 125 1100 Q 125 1160, 100 1260 T 100 1460 T 100 1660 T 100 1860 Q 125 1960, 125 2000 Q 125 2060, 100 2160 T 79 2260"
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
                d="M125 200 Q 125 260, 100 360 T 100 560 T 100 760 T 100 960 Q 125 1060, 125 1100 Q 125 1160, 100 1260 T 100 1460 T 100 1660 T 100 1860 Q 125 1960, 125 2000 Q 125 2060, 100 2160 T 79 2260"
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
                <span className="bg-clip-text mr-1.5 text-transparent bg-violet-400">
                  Test
                </span>
                and verify your checks
              </h1>
              <p className="text-white text-opacity-50 mt-2">
                Test your resources from your local machine or during deployment
                in CI, all running on Checkly’s global infrastructure.
              </p>
            </div>
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
            <img src={Baby6} alt="" className="" />
            <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
              <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                <span className="bg-clip-text mr-1.5 text-transparent bg-violet-400">
                  Test
                </span>
                and verify your checks
              </h1>
              <p className="text-white text-opacity-50 mt-2">
                Test your resources from your local machine or during deployment
                in CI, all running on Checkly’s global infrastructure.
              </p>
            </div>
          </div>
          <div className="w-full h-auto rounded-xl overflow-hidden mt-[50px]">
            <img src={Baby3} alt="" className="" />
            <div className="w-full h-[250px] overflow-hidden pt-0.5 mt-2">
              <h1 className="text-[23px] inter-medium text-white leading-[40px] font-medium mt-3">
                <span className="bg-clip-text mr-1.5 text-transparent bg-violet-400">
                  Test
                </span>
                and verify your checks
              </h1>
              <p className="text-white text-opacity-50 mt-2">
                Test your resources from your local machine or during deployment
                in CI, all running on Checkly’s global infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
