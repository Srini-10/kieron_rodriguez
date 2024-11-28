import Head from "../assets/Head.webp";

const Header = () => {
  return (
    <>
      <div className="w-full bg-orange-50 flex flex-col justify-center items-center">
        <div className="w-full -mt-[2px] bg-orange-50 flex justify-center items-center">
          <img src={Head} className="w-full unselectable" alt="" />
          <div className="absolute w-full h-[1660px] lg:h-[2310px] z-10"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
