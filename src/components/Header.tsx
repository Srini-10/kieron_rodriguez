import Olympic from "../assets/Olympic3.png";
import Marks from "../assets/Bookmark.png";
import Head from "../assets/Head.png";

const Header = () => {
  return (
    <>
      <div className="w-full bg-orange-50 flex flex-col justify-center items-center">
        <div className="relative w-[340px] lg:w-[1200px] mx-auto flex justify-between items-start">
          {/* Olympic Logo */}
          <div className="mt-10 w-[300px] lg:w-[400px] overflow-hidden flex flex-col justify-center items-center">
            <h1 className="text-[12px] lg:text-[25px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#eab308] to-[#b78428] uppercase">
              Keiron Rodriguez
            </h1>
            <img
              src={Olympic}
              alt="Olympic Logo"
              className="w-[100px] lg:w-[200px] h-auto object-cover -mt-5 lg:-mt-10 hue-rotate-[3deg]"
            />
          </div>
          <div className="w-full mx-auto flex justify-end items-start">
            <img
              src={Marks}
              className="h-[200px] lg:h-[280px] hue-rotate-[-5deg]"
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-[1200px] -mt-10 lg:-mt-72 bg-orange-50 flex justify-center items-center">
          <img src={Head} className="w-full unselectable" alt="Ring" />
          <div className="absolute w-full h-[1534px] z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
