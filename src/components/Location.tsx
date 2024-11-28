import { Link } from "react-router-dom";
import LocationIcon from "../assets/Location.svg";
import Map from "../assets/Map.png";

const Location = () => {
  return (
    <div className="w-full h-[680px] md:h-[1000px] lg:h-[700px] flex justify-center items-center overflow-hidden p-8 pt-3 relative">
      <div className="w-[300px] md:w-[560px] lg:w-[900px] xl:w-[1000px] md:h-auto lg:h-auto h-[240px] mt-[220px] md:mt-[410px] lg:mt-0 mx-auto relative unselectable">
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
      <div className="absolute lg:w-[960px] mx-auto xl:w-[1300px] lg:h-[700px] mt-5 lg:mt-14 flex justify-end items-start md:mt-0 lg:top-8 lg:right-8">
        <h1 className="flex justify-center lg:justify-end text-center lg:text-end items-start text-[12px] lg:text-[15px] w-[305px] lg:w-[363px] text-red-950">
          <img src={LocationIcon} className="w-6 block unselectable" alt="" />{" "}
          Heritage Madurai, Melakkal main road, Kochadai, Madurai - 625016,
          Tamil nadu, India.
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-[700px] md:h-[1000px] flex lg:flex-row flex-col justify-center lg:mt-[-148px] lg:justify-between lg:px-16 xl:px-32 bg-red-900 bg-opacity-20 items-center">
        <div className="w-[350px] h-[260px] md:w-[560px] md:h-[370px] lg:w-[480px] lg:h-[330px] xl:h-[390px] flex p-3 lg:p-4 rounded-xl group justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white hover:bg-opacity-30 transition-all duration-500 ease-in-out">
          <div className="relative min-w-[330px] h-[240px] md:min-w-[540px] md:h-[350px] lg:min-w-[400px] xl:min-w-[500px] lg:h-[300px] xl:h-[360px] overflow-hidden inter-medium lg:group-hover:min-w-[590px] lg:group-hover:h-[420px] bg-red-50 border-[1px] border-red-800 border-opacity-10 bg-opacity-80 backdrop-blur-sm rounded-xl flex justify-center items-center transition-all duration-500 ease-in-out">
            <img
              src={"https://i.ibb.co/vqpY0VR/Location.jpg"}
              className="w-full h-full lg:w-[440px] xl:w-[560px] lg:h-[390px] brightness-110 object-cover rounded-xl unselectable"
              alt=""
            />
          </div>
        </div>
        <Link to={"https://maps.app.goo.gl/2SUC4vLpsdxqVAEQ9"} target="_blank">
          <button className="w-[180px] lg:w-[210px] h-12 lg:h-14 lg:mr-[20px] mt-[280px] md:mt-[460px] lg:mt-5 flex justify-center items-center bg-white bg-opacity-20 backdrop-blur-sm border border-opacity-25 border-white rounded-full hover:bg-opacity-30 transition-all duration-500 ease-in-out">
            <div className="w-[172px] lg:w-[200px] text-[13px] lg:text-[16px] inter-medium h-10 lg:h-12 lg:hover:w-[210px] lg:hover:h-14 bg-white rounded-full flex justify-center items-center transition-all duration-500 ease-in-out">
              Navigate to Venue
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
