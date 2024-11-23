import Olympic from "../assets/olympic.webp";

const Header3 = () => {
  return (
    <>
      <div className="w-full h-screen bg-blue-50 relative flex justify-center items-center">
        <img src={Olympic} className="w-full saturate-[1.2]" alt="" />
      </div>
    </>
  );
};

export default Header3;
