import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update screen width on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        {/* Warning for Tablet screen */}
        {screenWidth > 700 && screenWidth <= 1366 ? (
          <div className="fixed top-0 left-0 w-full h-screen bg-white p-4 text-center z-50 flex flex-col md:flex-row items-center justify-center">
            {/* Warning symbol ⚠️ in amber-500 color */}
            <span className="hue-rotate-[190deg] brightness-75 text-[40px] md:text-xl lg:text-2xl xl:text-3xl mr-2">
              ⚠️
            </span>

            {/* Warning message */}
            <p className="chakra-medium text-violet-950 text-[13px] md:text-md lg:text-lg xl:text-xl">
              This device is not compatible with this website.
            </p>
          </div>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
