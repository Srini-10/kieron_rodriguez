import { Link } from "react-router-dom";
import LocationIcon from "../assets/Location.svg";
import Map from "../assets/Map.png";

const Location = () => {
  return (
    <div className="w-full h-[680px] lg:h-[700px] flex justify-center items-center overflow-hidden p-8 pt-32 relative">
      <div className="w-[300px] lg:w-[1000px] lg:h-auto h-[240px] mt-32 lg:mt-0 mx-auto relative unselectable">
        <img
          src={Map}
          className="w-full h-auto object-cover unselectable"
          alt=""
        />

        {/* Dot with spreading wave animation */}
        <div className="absolute top-[157px] right-[85px] lg:top-[52%] lg:right-[28.5%] -translate-x-1/2 -translate-y-1/2">
          {/* Static Dot */}
          <div className="w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full z-10 relative">
            {/* Animated Waves */}
            <div className="absolute w-1 h-1 lg:w-3 lg:h-3 bg-white rounded-full animate-wave"></div>
          </div>
        </div>
      </div>
      <div className="absolute lg:w-[1300px] lg:h-[700px] -mt-14 lg:mt-0 flex justify-end items-start lg:top-8 lg:right-8">
        <h1 className="flex justify-center lg:justify-end text-center lg:text-end items-start text-[12px] lg:text-[15px] w-[305px] lg:w-[363px] text-red-950">
          <img src={LocationIcon} className="w-6 block unselectable" alt="" />{" "}
          Heritage Madurai, Melakkal main road, Kochadai, Madurai - 625016,
          Tamil nadu, India.
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-[700px] flex lg:flex-row flex-col justify-center lg:justify-between lg:px-32 bg-red-800 bg-opacity-20 items-center">
        <div className="w-[350px] h-[220px] lg:w-[560px] lg:h-[390px] flex p-3 lg:p-4 rounded-xl group justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white hover:bg-opacity-30 transition-all duration-500 ease-in-out">
          <div className="relative min-w-[330px] h-[200px] lg:min-w-[500px] lg:h-[360px] overflow-hidden inter-medium lg:group-hover:min-w-[590px] lg:group-hover:h-[420px] bg-red-50 border-[1px] border-red-800 border-opacity-10 bg-opacity-80 backdrop-blur-sm rounded-xl flex justify-center items-center transition-all duration-500 ease-in-out">
            <img
              src={"https://i.ibb.co/vqpY0VR/Location.jpg"}
              className="w-full h-full lg:w-[560px] lg:h-[390px] brightness-110 object-cover rounded-xl unselectable"
              alt=""
            />
          </div>
          <img
            src={"https://i.ibb.co/DWd798N/27.png"}
            className="w-[30px] lg:w-[40px] absolute -bottom-10 -left-10 -rotate-[130deg] opacity-30 transition-transform duration-1000 ease-out unselectable"
            alt=""
          />
        </div>
        <Link to={"https://maps.app.goo.gl/2SUC4vLpsdxqVAEQ9"} target="_blank">
          <button className="w-[180px] lg:w-[210px] h-12 lg:h-14 lg:mr-[120px] mt-[280px] lg:mt-[43px] flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out">
            <div className="w-[172px] lg:w-[200px] text-[13px] lg:text-[16px] inter-medium h-10 lg:h-12 lg:hover:w-[210px] lg:hover:h-14 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
              Visit location in map
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
