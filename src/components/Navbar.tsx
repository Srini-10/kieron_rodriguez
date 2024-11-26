import { Button } from "@nextui-org/react";

const Navbar = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="shadow-2xl top-0 left-0 w-full z-[99999999]">
        <div className="w-full lg:w-[1200px] h-[80px] bg-white flex items-center justify-between mx-auto">
          <ul className="gap-x-12 items-center lexend-light w-[350px] lg:flex hidden">
            <li
              onClick={() => handleScroll("story")}
              className="cursor-pointer"
            >
              Story
            </li>
            <li
              onClick={() => handleScroll("family")}
              className="cursor-pointer"
            >
              Family
            </li>
            <li
              onClick={() => handleScroll("gallery")}
              className="cursor-pointer"
            >
              Gallery
            </li>
            <li
              onClick={() => handleScroll("contact")}
              className="cursor-pointer"
            >
              Contact
            </li>
          </ul>
          <div className="h-[80px] w-[360px] overflow-hidden flex justify-center items-center mx-auto">
            <img
              className="w-full h-auto scale-75 object-cover -mt-3 unselectable hue-rotate-[110deg]"
              src={"https://i.ibb.co/BqRvNLz/11.png"}
              alt=""
            />
          </div>
          <div className="justify-end w-[350px] lg:flex hidden">
            <div className="relative inline-block">
              <Button className="relative bg-[#bd0302] h-12 w-44 rounded-lg text-[17px] text-white font-semibold">
                Let's Celebrate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
