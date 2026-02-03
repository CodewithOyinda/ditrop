import { useState, useEffect } from "react";
import bg from "../../assets/bg-1.png";
import avatar from "../../assets/GroupAvatar.png";
import slideone from "../../assets/BridgeUp-3.png";
import slidetwo from "../../assets/ChrystalChigbu-2.png";

const AUTO_SLIDE_INTERVAL = 5000;

const SmeIntro = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrent(prev => (prev + 1) % 2);
      }, AUTO_SLIDE_INTERVAL);

      return () => clearInterval(timer);
    }, []);

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="w-[500px]">
            <div className="bg-[#F6F9FF] border-2 border-[#ffff] flex rounded-[20px] sm:w-[380px] w-[280px]
                                       items-center gap-2 font-['Inter']
                                       sm:h-[45px] h-[30px]">
                                        <img src={avatar} alt="avatar" className="h-[30px]"/>
                                        <p className="text-[10px] sm:text-[14px] font-bold">Trusted by over 16+ businesses worldwide</p>
            </div>
            {/* Subtitle */}
            <p className="text-[14px] font-[700] sm:text-[45px] font-['Inter'] mt-3">
              Transforming Your Business into Digital Excellence
            </p>
             <p className="text-[10px] sm:text-[22px] text-gray-500 pt-5 pb-5">
             We turn ambition into achievement with tailored solutions that drive growth, innovation, and lasting impact.
            </p> 
            </div>
            <div>
            {/* ================= SLIDE 1 ================= */}
              <div
          className={`absolute  transition-all duration-700 ease-out
            ${current === 0
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          <img src={slideone} alt="image" className="w-[500px] h-full " />
        </div>
         {/* ================= SLIDE 2 ================= */}
        <div
          className={`absolute transition-all duration-700 ease-out
            ${current === 1
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
<img src={slidetwo} alt="image" className="w-[500px] h-full" />
        </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SmeIntro;
