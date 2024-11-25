import { Button } from "@nextui-org/react";

const Navbar = () => {
  return (
    <>
      <div className="w-full lg:w-[1300px] h-[80px] lg:mt-6 border-b-[1px] bg-white border-slate-200 flex items-center z-50 justify-between mx-auto">
        <ul className="gap-x-12 items-center lexend-light w-[350px] lg:flex hidden">
          <li className="">Story</li>
          <li className="">Family</li>
          <li className="">Gallery</li>
          <li className="">Contact</li>
        </ul>
        <div className="h-[80px] w-[360px] overflow-hidden flex justify-center items-center mx-auto">
          <img
            className="w-full h-auto scale-75 object-cover -mt-3 unselectable"
            src={"https://i.ibb.co/BqRvNLz/11.png"}
            alt=""
          />
        </div>
        <div className="justify-end w-[350px] lg:flex hidden">
          <div className="relative inline-block">
            <Button className="relative bg-violet-700 h-12 w-44 rounded-lg text-[17px] text-white font-semibold">
              Let's Celebrate
            </Button>
            <img
              className="absolute z-10 top-7 -left-6 transform -translate-y-1/2 w-10 unselectable"
              src={"https://i.ibb.co/4pDtqPQ/2.png"}
              alt=""
            />
            <img
              className="absolute z-10 -top-2 -right-[26px] transform -translate-y-1/2 w-14 unselectable"
              src={"https://i.ibb.co/Q6myFz5/1.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
