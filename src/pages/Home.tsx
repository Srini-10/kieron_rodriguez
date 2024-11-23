import About from "../components/About";
import Gallery from "../components/Gallery";
import Header2 from "../components/Header2";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import Timeline from "../components/Timeline";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <div className="max-w-full h-auto scroll-smooth transition-all duration-300 ease-in-out">
        <Navbar />
        <Header2 />
        <Video />
        <Timeline />
        <Quote />
        <Gallery />
        <About />
      </div>
    </>
  );
};

export default Home;
