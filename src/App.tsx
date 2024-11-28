import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  if (10 < 0) {
    console.log(screenWidth);
  }

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
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
