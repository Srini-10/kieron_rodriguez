import Baby from "../assets/pictures/baby.png";

const About = () => {
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
    <>
      <div className="w-[1300px] h-[700px] mx-auto flex justify-between items-center gap-x-20 px-20 rounded-lg overflow-hidden bg-purple-50 relative">
        <div className="z-10 min-w-[400px] flex justify-center items-center">
          <img src={Baby} className="w-full" alt="" />
        </div>
        <div className="z-10">
          <h1 className="lexend-medium text-[18px] leading-8">
            Meet{" "}
            <span className="text-violet-600 font-medium inter-medium text-[30px]">
              Kieron Rodriguez
            </span>{" "}
            - Curious, joyful, and just the right amount of mischief, Kieron is
            a little whirlwind of energy who keeps us all on our toes! At just
            one, he’s already showing off his quick grasp, reflexes and
            surprising strength—did we mention he can lift a watermelon bigger
            than his head? His favorite partner-in-crime is none other than his
            big brother, DeFi, our playful Goldendoodle. Together, they make the
            perfect tag team of fun and chaos! From snatching In-N-Out burgers
            at the drive-through to intently watching the Olympics with his dad,
            Kieron’s boundless enthusiasm hints at a future explorer and budding
            sports lover. This first year has been filled with laughter, love,
            and countless unforgettable moments—
            <span className="bg-purple-200 px-1">
              he’s truly the spark of energy
            </span>{" "}
            that completes our Family.
          </h1>
        </div>

        <div className="w-full h-full absolute">
          <svg
            viewBox="0 0 360 50"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 -left-10 w-full h-full scale-[1.1]"
          >
            {curves.map((curve, index) => (
              <path
                key={index}
                d={curve}
                stroke="#ede9fe"
                strokeWidth="0.4"
                fill="transparent"
                className="animate-line -rotate-2 -translate-x-0.5"
              />
            ))}
          </svg>
        </div>
      </div>
    </>
  );
};

export default About;
