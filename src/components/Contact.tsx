import { useState, useEffect } from "react";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: "",
    familyName: "",
    members: "",
    foodPreference: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can handle further logic like sending this data to an API
  };

  useEffect(() => {
    let animationFrame: number;

    const updateSmoothPosition = () => {
      setSmoothPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1, // Ease the transition
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(updateSmoothPosition);
    };

    animationFrame = requestAnimationFrame(updateSmoothPosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [mousePosition]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const calculateTransform = (offsetX: number, offsetY: number): string => {
    return `translate(${smoothPosition.x * offsetX}px, ${
      smoothPosition.y * offsetY
    }px)`;
  };

  const curves = [
    "M0,-60 C100,-58, 200,-58, 360,-60",
    "M0,-40 C100,-38, 200,-38, 360,-40",
    "M0,-20 C100,-18, 200,-18, 360,-20",
    "M0,0 C100,2, 200,2, 360,0",
    "M0,20 C100,22, 200,22, 360,20",
    "M0,40 C100,42, 200,42, 360,40",
    "M0,60 C100,62, 200,62, 360,60",
    "M0,80 C100,82, 200,82, 360,80",
    "M0,100 C100,98, 200,98, 360,100",
    "M0,120 C100,114, 200,114, 360,120",
  ];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-full h-[850px] lg:h-[700px] flex justify-center items-center overflow-hidden"
    >
      {/* SVG Animated Lines */}
      <div className="w-full h-full absolute z-0">
        <svg
          viewBox="0 0 360 50"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 w-full h-full"
        >
          {curves.map((curve, index) => (
            <path
              key={index}
              d={curve}
              stroke="#fbf8ff"
              strokeWidth="0.5"
              fill="transparent"
              className="animate-line -rotate-2 -translate-x-0.5"
            />
          ))}
        </svg>
      </div>

      {/* Main Content */}
      <div className="lg:relative mx-auto w-[94vw] lg:w-[1300px] h-[600px] -mt-20 lg:mt-10 z-50 flex flex-col lg:flex-row justify-center gap-32 items-center">
        <div className="text-center lg:text-start">
          <h1 className="relative text-[36px] lg:text-[66px] mt-24 lg:-mt-40 text-center -rotate-1.5 inter-extrabold z-10">
            Spreading <span className="text-purple-400">joy</span> and{" "}
          </h1>
          <span className="bg-violet-600 text-white px-2 text-[30px] lg:text-[66px] inter-extrabold">
            happiness
          </span>
        </div>

        {/* Animated Images */}
        <div className="w-[1400px] hidden lg:block h-full absolute z-[99] bg-white bg-opacity-10">
          <img
            src={"https://i.ibb.co/fFdK6L5/24.png"}
            className="w-[70px] absolute top-[99px] left-[88px] -rotate-45 transition-transform duration-1000 ease-out unselectable"
            alt=""
          />
          <img
            src={"https://i.ibb.co/DWd798N/27.png"}
            className="w-[60px] absolute top-[103px] left-[467px] opacity-80 transition-transform duration-1000 ease-out unselectable"
            style={{
              transform: calculateTransform(0.01, 0.01),
              rotate: "30deg",
            }}
            alt=""
          />
          <img
            src={"https://i.ibb.co/q5JVVbK/26.png"}
            className="w-[130px] absolute -top-[30px] right-[70px] transition-transform duration-1000 ease-out unselectable"
            alt=""
          />
          <img
            src={"https://i.ibb.co/X8yx8hb/19.png"}
            className="w-[50px] rotate-45 absolute bottom-32 left-64 transition-transform duration-1000 ease-out unselectable"
            style={{
              transform: calculateTransform(0.015, -0.015),
              rotate: "40deg",
            }}
            alt=""
          />
          <img
            src={"https://i.ibb.co/4pDtqPQ/2.png"}
            className="w-[40px] absolute bottom-16 right-20 transition-transform duration-1000 ease-out unselectable"
            style={{ transform: calculateTransform(-0.01, -0.02) }}
            alt=""
          />
        </div>

        {/* Form */}
        <div className="p-6 bg-white border-[1px] border-violet-300 border-opacity-25 -mt-16 lg:mt-0 lg:mr-10 rounded-lg shadow-lg w-[94vw] lg:w-full max-w-md z-[9999]">
          <h2 className="text-xl font-semibold mb-4 text-violet-600">
            Invitation Form
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Family Name Input */}
            <div className="mb-4">
              <label
                htmlFor="familyName"
                className="block text-sm font-medium text-gray-600"
              >
                Family Name
              </label>
              <input
                type="text"
                id="familyName"
                name="familyName"
                value={formData.familyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                placeholder="Enter your family name"
                required
              />
            </div>

            {/* Members Input */}
            <div className="mb-4">
              <label
                htmlFor="members"
                className="block text-sm font-medium text-gray-600"
              >
                Members in the Family
              </label>
              <input
                type="number"
                id="members"
                name="members"
                value={formData.members}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none"
                placeholder="Enter number of members"
                required
                min="1"
              />
            </div>

            {/* Food Preference Radio Buttons */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Food Preference
              </label>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="veg"
                  name="foodPreference"
                  value="veg"
                  checked={formData.foodPreference === "veg"}
                  onChange={handleChange}
                  className="mr-2 cursor-pointer"
                />
                <label
                  htmlFor="veg"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Veg
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="nonVeg"
                  name="foodPreference"
                  value="non-veg"
                  checked={formData.foodPreference === "non-veg"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="nonVeg"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Non-Veg
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="both"
                  name="foodPreference"
                  value="both"
                  checked={formData.foodPreference === "both"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  htmlFor="both"
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  Both (Veg and Non-Veg)
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-violet-500 rounded-lg hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
