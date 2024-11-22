import P1 from "../assets/pop1.svg";
import P2 from "../assets/pop2.svg";
import P3 from "../assets/pop3.svg";
import P4 from "../assets/pop4.svg";
import P5 from "../assets/pop5.svg";

const Quote = () => {
  return (
    <>
      <div className=" bg-violet-50 w-full h-[170px] lg:h-[360px]">
        <div className="w-[88vw] lg:w-[1300px] h-full mx-auto lg:p-24 flex justify-center items-center relative">
          <h1 className="inter-bold text-justify text-[12px] lg:text-[35px]">
            Birthdays are{" "}
            <span className="bg-violet-600 text-white px-1 lg:px-2 -mx-0.5">
              special days
            </span>{" "}
            for us because they mark the day we were born, the day our mothers
            fought to bring us into this world. Were are here, ready to present
            on your special day, to bring{" "}
            <span className="bg-violet-200 px-1 lg:px-2 lg:ml-2">
              happiness
            </span>{" "}
            to the people you cherish.
          </h1>
          <div className="hidden lg:block w-full h-[360px] absolute top-0 left-0 bg-white bg-opacity-10 z-10">
            <img
              src={P1}
              className="w-[50px] absolute rotate-12 top-10 left-96 transition-transform duration-1000 ease-out"
              alt=""
            />
            <img
              src={P4}
              className="w-[70px] absolute top-14 rotate-45 right-28 transition-transform duration-1000 ease-out"
              alt=""
            />
            <img
              src={P3}
              className="w-[20px] rotate-12 absolute bottom-12 left-60 transition-transform duration-1000 ease-out"
              alt=""
            />
            <img
              src={P2}
              className="w-[50px] absolute bottom-20 right-20 rotate-45 transition-transform duration-1000 ease-out"
              alt=""
            />
            <img
              src={P5}
              className="w-[50px] rotate-45 absolute bottom-6 right-1/3 transition-transform duration-1000 ease-out"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
