import bg from "../../assets/bg-1.png";
import sme from "../../assets/SMELogo.png";
import food from "../../assets/DitropFood-Logo.png";
import smeimage from "../../assets/SMEImage.png";
import foodimage from "../../assets/FoodImage-1.png";
import go from "../../assets/DitropRealty-Logo.png";
import realty from "../../assets/DitropRealty-Logo.png";
import goImage from "../../assets/GOImage-1.png";
import realtyImage from "../../assets/RealtyImage-3.png";

const AppOverview = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-['DM Sans'] text-[28px] sm:text-[50px] font-[700] text-gray-900">
            The only app you'll ever need.
          </h2>
          <p className="text-[12px] sm:text-[18px] text-gray-600 mt-2">
            From food and rides to real estate and business tools. <br />
            Ditrop — your all-in-one app for everyday living.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* ================= CARD TEMPLATE ================= */}
          {[
            {
              bg: "#f2ecff",
              logo: sme,
              image: smeimage,
              title: "Empowering Your Business",
              text:
                "Access affordable digital solutions to boost your online presence and grow your brand.",
              footer: "Learn more →",
              footerClass: "text-blue-600",
            },
            {
              bg: "#fff0ee",
              logo: food,
              image: foodimage,
              title: "Delicious Eats",
              text:
                "Discover local food options, order your favorite meals, and get them delivered to your doorstep.",
              footer: "Coming soon",
              footerClass: "text-gray-500",
            },
            {
              bg: "#e5f6f0",
              logo: go,
              image: goImage,
              title: "Ride-Hailing Made Simple",
              text:
                "Get safe, reliable, and affordable rides anytime, anywhere right on your mobile phone.",
              footer: "Coming soon",
              footerClass: "text-gray-500",
            },
            {
              bg: "#fff6ea",
              logo: realty,
              image: realtyImage,
              title: "Your Gateway to Real Estate",
              text:
                "Find verified property listings and connect with trusted agents all on the Ditrop app.",
              footer: "Coming soon",
              footerClass: "text-gray-500",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-stretch justify-between
                         rounded-[30px] overflow-hidden shadow-lg"
              style={{ backgroundColor: card.bg }}
            >
              {/* TEXT SIDE */}
              <div className="flex flex-col justify-start p-6 md:p-8 flex-1 space-y-4">
                <img
                  src={card.logo}
                  alt="logo"
                  className="w-[150px] sm:w-[200px]"
                />

                <p className="text-[14px] sm:text-[18px] font-[700]">
                  {card.title}
                </p>

                <p className="text-gray-700 text-[12px] sm:text-[16px] leading-relaxed">
                  {card.text}
                </p>

                <p className={`font-medium ${card.footerClass}`}>
                  {card.footer}
                </p>
              </div>

              {/* IMAGE SIDE */}
              <div className="w-full sm:w-[280px] flex items-center justify-center">
                <img
                  src={card.image}
                  alt="illustration"
                  className="w-full h-full object-contain"
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
