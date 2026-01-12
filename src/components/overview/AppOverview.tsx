import bg from "../../assets/bg-1.png";
import sme from "../../assets/SMELogo.png";
import food from "../../assets/DitropFood-Logo.png";
import smeimage from "../../assets/SMEImage.png";
import foodimage from "../../assets/FoodImage-1.png";
import go from "../../assets/DitropRealty-Logo.png";
import realty from "../../assets/DitropRealty-Logo.png";
import goImage from "../../assets/GOImage-1.png";
import realtyImage from "../../assets/RealtyImage-3.png";

const cards = [
  {
    bg: "#f2ecff",
    logo: sme,
    image: smeimage,
    title: "Empowering Your Business",
    text:
      "Access affordable digital solutions to boost your online presence and grow your brand.",
    footer: "Learn more ↗",
    
  },
  {
    bg: "#fff0ee",
    logo: food,
    image: foodimage,
    title: "Delicious Eats",
    text:
      "Discover local food options, order your favorite meals and get it delivered to your doorstep.",
    footer: "Coming Soon",
    footerClass: "text-gray-600 italic",
  },
  {
    bg: "#e5f6f0",
    logo: go,
    image: goImage,
    title: "Ride-Hailing Made Simple",
    text:
      "Get safe, reliable and affordable rides anytime, anywhere right on your mobile phone.",
    footer: "Coming Soon",
    footerClass: "text-gray-600 italic",
  },
  {
    bg: "#fff6ea",
    logo: realty,
    image: realtyImage,
    title: "Your Gateway to Real Estate",
    text:
      "Find verified property listings and connect with trusted agents all on the Ditrop app.",
    footer: "Coming Soon",
    footerClass: "text-gray-600 italic",
  },
];

const AppOverview = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-['DM Sans'] text-[28px] sm:text-[50px] font-[700]">
            The only app you'll ever need.
          </h2>
          <p className="text-[12px] sm:text-[18px] text-gray-600 mt-2">
            From food and rides to real estate and business tools.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-[32px] border-2 border-[#ffff] overflow-hidden shadow-lg min-h-[340px]"
              style={{ backgroundColor: card.bg }}
            >
              {/* TEXT ZONE */}
              <div className="relative z-10 w-[60%] p-8 flex flex-col gap-4">
                <img src={card.logo} alt="" className="w-[160px]" />

                <h3 className="text-[20px] font-[700]">
                  {card.title}
                </h3>

                <p className="text-[15px] text-gray-700 leading-relaxed">
                  {card.text}
                </p>

                <span className={`mt-auto font-medium ${card.footerClass}`}>
                  {card.footer}
                </span>
              </div>

              {/* IMAGE ZONE */}
              <div className="absolute bottom-0 right-0 w-[100%] h-full pointer-events-none">
  <img
    src={card.image}
    alt=""
    className="w-full h-full object-cover object-bottom scale-[1.05]"
  />
</div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppOverview;
