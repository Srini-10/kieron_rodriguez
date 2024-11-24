import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Invitation from "../components/Invitation";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Quote from "../components/Quote";
import Timeline from "../components/Timeline";
import TimelineMobile from "../components/TimelineMobile";
import Video from "../components/Video";

const Home = () => {
  return (
    <>
      <div className="max-w-full h-auto">
        <Navbar />
        <Header />
        <Video />
        <div className="hidden lg:block">
          <Timeline />
        </div>
        <div className="lg:hidden">
          <TimelineMobile />
        </div>
        <Quote />
        <Gallery />
        <Invitation />
        <Contact />
        <Location />

        <div className="min-w-full h-12 bg-violet-950 flex justify-center items-center">
          <h1 className="inter-medium text-[16px] lg:text-[17px] text-white opacity-85 uppercase">
            Kieron Rodriguez
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
