const About = () => {
  return (
    <>
      <div className="bg-orange-50 w-full h-auto">
        <div className="w-[340px] md:w-[680px] lg:w-[860px] xl:w-[1200px] mx-auto h-[1120px] md:h-[600px] md:pt-0 pt-14 lg:pt-0 lg:h-[800px] flex md:flex-row flex-col justify-between items-center">
          <div className="">
            <img
              src={"https://i.ibb.co/xqJGssx/1.jpg"}
              className="w-[340px] md:w-[300px] lg:w-[380px] xl:w-[440px] rounded-lg unselectable"
              alt=""
            />
          </div>
          <div className="w-[340px] md:w-[330px] lg:w-[440px] xl:w-[600px] h-[580px] md:h-auto md:mt-0 lg:h-[580px]">
            <h1 className="whisper-medium text-[50px] md:text-[40px] lg:text-[70px] xl:text-[75px] text-red-900">
              Kieron Rodriguez
            </h1>
            <p className="montserrat-medium text-[15px] md:text-[13px] lg:text-[17px] xl:text-[19px] mt-1 lg:mt-5">
              Meet Kieron Rodriguez – Explorative, cheerful, and just the right
              amount of mischievous! Kieron is a little whirlwind of energy who
              keeps us all on our toes. At just one, he’s already showing off
              his quick grasp, sharp reflexes, and surprising strength—did we
              mention he can lift a watermelon bigger than his head? His
              favorite partner-in-crime is his big brother, DeFi, our playful
              Goldendoodle. Together, they make the perfect tag team of fun and
              chaos! From snatching In-N-Out burgers at the drive-through to
              intently watching the Olympics with his dad, Kieron’s boundless
              enthusiasm hints at a future full of exploration and budding
              sports lover. This first year has been filled with laughter, love,
              and countless unforgettable moments—he’s truly the spark of energy
              that makes our family whole.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
