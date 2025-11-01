import bg from "../../assets/bg-1.png";
import sme from "../../assets/SMELogo.png";
import food from "../../assets/DitropFood-Logo.png";
import smeimage from "../../assets/SMEImage.png";
import foodimage from "../../assets/FoodImage-1.png";
import go from "../../assets/DitropGo-Logo.png";
import realty from "../../assets/DitropRealty-Logo.png";
import goImage from "../../assets/GoImage-1.png";
import realtyImage from "../../assets/RealtyImage-3.png";

const AppOverview = () => {
  return (
    <div className="relative">
        <div>
                <img src={bg} alt="bg" className="w-full sm:h-full" />
        </div>

    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-full max-w-6xl pt-20">
      <p className="font-['DM Sans'] text-[20px] sm:text-[50px] font-[700]">The only app you'll <br/>ever need.</p>
      <p className="text-[10px] sm:text-[18px] text-gray-500">From food and rides to real estate and business tools.</p>
      <p className="text-[10px] sm:text-[18px] text-gray-500">Ditrop your all-in-one app for everyday living.</p>
      <div className="flex mt-5 gap-4">
         <div className="w-[600px] h-[350px] border-2 border-[#ffffff] bg-[#f2ecff] rounded-[30px] shadow-lg">
            <img src={sme} alt="sme" className="w-[200px] h-[30px] " />
            <div className="flex gap-2">
               <div className="w-[200px] px-5 md:px-5 py-4">
                 <p>Empowering Your Business</p>
                 <p>Access affordable digital solutions to <br/> boost your online presence and grow <br/>your brand</p>
                 <p>Learn more</p>
               </div>
               <img src={smeimage} alt="sme" className="w-[300px] h-[300px]"  />
            </div>
         </div>
         <div className="w-[600px]  h-[350px] border-2 border-[#ffffff] bg-[#fff0ee] rounded-[30px] shadow-lg">
           <img src={food} alt="food" className="w-[200px] h-[30px] px-2 py-2" />
           <div className="flex gap-2">
               <div className="w-[200px] px-5 md:px-5 py-4">
                 <p>Delicious Eats</p>
                 <p>Discover local food options, order <br/>your favorite meals and get it <br/>delivered to your doorstep.</p>
                 <p>Coming soon</p>
               </div>
               <img src={foodimage} alt="food" className="w-[300px] h-[300px]" />
            </div>
         </div>
      </div>
      <div className="flex mt-5 gap-4">
         <div className="w-[600px] h-[350px] border-2 border-[#ffffff] bg-[#fff6ea] rounded-[30px] shadow-lg">
            <img src={go} alt="go" className="w-[200px] h-[30px] " />
            <div className="flex gap-2">
               <div className="w-[200px] px-5 md:px-5 py-4">
                 <p>Ride-Hailing Made Simple</p>
                 <p>Get safe, reliable, and affordable rides<br/>anytime, anywhere right on your <br/>mobile phone.</p>
                 <p>Coming Soon</p>
               </div>
               <img src={goImage} alt="go" className="w-[300px] h-[300px]"  />
            </div>
         </div>
         <div className="w-[600px]  h-[350px] border-2 border-[#ffffff] bg-[#e5f6f0] rounded-[30px] shadow-lg">
           <img src={realty} alt="realty" className="w-[200px] h-[30px] px-2 py-2" />
           <div className="flex gap-2">
               <div className="w-[200px] px-5 md:px-5 py-4">
                 <p>Your Gateway to Real Estate</p>
                 <p>Find verified property listings and<br/>connect with trusted agents all on<br/>the Ditrop app.</p>
                 <p>Coming soon</p>
               </div>
               <img src={realtyImage} alt="realty" className="w-[300px] h-[300px]" />
            </div>
         </div>
      </div>
      </div>
    </div>
  )
}

export default AppOverview
