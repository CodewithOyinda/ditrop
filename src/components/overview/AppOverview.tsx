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
        className="absolute top-0 left-0 w-full h-full object-cover "
      />

      {/* Main Content */}
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
          {/* SME Card */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#f2ecff] h-[300px] border border-white rounded-[30px] shadow-lg p-6">
            <div className="flex-1 space-y-10">
              <img src={sme} alt="SME" className="w-[150px] sm:w-[200px]" />
              <div>
                <p className="text-[14px] sm:text-[18px] font-[700]">
                  Empowering Your Business
                </p>
                <p className="text-gray-700 text-[12px] sm:text-[16px]">
                  Access affordable digital solutions to boost your online
                  presence and grow your brand.
                </p>
                <p className="text-blue-600 font-medium mt-10 cursor-pointer hover:underline">
                  Learn more →
                </p>
              </div>
            </div>
            <img
              src={smeimage}
              alt="SME"
              className="w-[200px] sm:w-[250px] mt-6 sm:mt-0"
            />
          </div>

          {/* Food Card */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#fff0ee] h-[300px] border border-white rounded-[30px] shadow-lg p-6">
            <div className="flex-1 space-y-10">
              <img src={food} alt="Food" className="w-[150px] sm:w-[200px]" />
              <div>
                <p className="text-[14px] sm:text-[18px] font-[700]">
                  Delicious Eats
                </p>
                <p className="text-gray-700 text-[12px] sm:text-[16px]">
                  Discover local food options, order your favorite meals, and
                  get them delivered to your doorstep.
                </p>
                <p className="text-gray-500 font-medium mt-10">Coming soon</p>
              </div>
            </div>
            <img
              src={foodimage}
              alt="Food"
              className="w-[200px] sm:w-[250px] mt-6 sm:mt-0"
            />
          </div>

          {/* Go Card */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#e5f6f0] h-[300px] border border-white rounded-[30px] shadow-lg p-6">
            <div className="flex-1 space-y-10">
              <img src={go} alt="Go" className="w-[150px] sm:w-[200px]" />
              <div>
                <p className="text-[14px] sm:text-[18px] font-[700]">
                  Ride-Hailing Made Simple
                </p>
                <p className="text-gray-700 text-[12px] sm:text-[16px]">
                  Get safe, reliable, and affordable rides anytime, anywhere
                  right on your mobile phone.
                </p>
                <p className="text-gray-500 font-medium mt-10">Coming soon</p>
              </div>
            </div>
            <img
              src={goImage}
              alt="Go"
              className="w-[200px] sm:w-[250px] mt-6 sm:mt-0"
            />
          </div>

          {/* Realty Card */}
          <div className="flex flex-col sm:flex-row justify-between items-center bg-[#fff6ea] h-[300px] border border-white rounded-[30px] shadow-lg p-6">
            <div className="flex-1 space-y-10">
              <img
                src={realty}
                alt="Realty"
                className="w-[150px] sm:w-[200px]"
              />
              <div>
                <p className="text-[14px] sm:text-[18px] font-[700]">
                  Your Gateway to Real Estate
                </p>
                <p className="text-gray-700 text-[12px] sm:text-[16px]">
                  Find verified property listings and connect with trusted
                  agents all on the Ditrop app.
                </p>
                <p className="text-gray-500 font-medium mt-10">Coming soon</p>
              </div>
            </div>
            <img
              src={realtyImage}
              alt="Realty"
              className="w-[200px] sm:w-[250px] mt-6 sm:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOverview;
