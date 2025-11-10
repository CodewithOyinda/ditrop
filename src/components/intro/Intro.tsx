import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../buttons/Button";
import bg from "../../assets/bg-1.png";
import favicon from "../../assets/Favicon.png";

const Intro = () => {
  const words = ["EARNING", "MOVING", "LIVING"];
  const [index, setIndex] = useState(0);

  // Change word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
        <div>
        <img src={bg} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover "/>
      </div>
    <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-20">
      <div className="flex items-center">
        <div>
          {/* Top label and link */}
          <div className="bg-white flex rounded-[20px] w-[380px] items-center gap-2 font-['Inter'] h-[40px]">
            <p className="bg-[#ff6b56] flex items-center justify-center gap-1 rounded-2xl text-white w-[130px] h-[20px] text-[10px] sm:text-[14px] mx-5">
              What's New <MdKeyboardArrowRight />
            </p>
            <button className="flex items-center gap-2 text-[10px] sm:text-[14px]">
              Check out Ditrop's blog <FaArrowRight />
            </button>
          </div>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[18px] font-['Inter'] mt-3">
            Your all-in-one app for
          </p>

          {/* Animated changing word */}
          <div className="h-[40px] sm:h-[60px] overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={words[index]}
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="font-['DM Sans'] text-[20px] sm:text-[50px] font-[700]"
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-[10px] sm:text-[18px] text-gray-500">
            Manage your daily interactions and essential <br />
            services all in one place.
          </p>

          {/* Email input and button */}
          <div className="border border-[#9dbbff] rounded-[20px] mt-4 p-4 w-[300px] sm:w-[500px]">
            <p className="text-[10px] sm:text-[14px] font-[500]">Be the first to get the Ditrop Super app when it launches</p>
            <div className="flex gap-2 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="border border-[#9dbbff] rounded-[20px] px-4 py-2 focus:outline-none focus:ring-2 bg-[#e6eeff] text-[#5c667b] flex-1"
              />
              <Button size="blue" />
            </div>
          </div>
        </div>

        <div>{/* You can place an image or illustration here */}</div>
      </div>
      <div className="flex gap-3">
        <div className="bg-white flex gap-2 px-5 py-1 flex-row h-[50px] w-[315px] rounded-[20px]">
            <img src={favicon} alt="favicon"  className="h-[35px] w-[35px]"/>
            <div>
                <p className="text-[10px] sm:text-[12px]">Get affordable digital solutions with</p>
                <p className="text-[10px] sm:text-[12px] font-[500]">DitropSME</p>
            </div>
        </div>
        <div className="bg-white flex gap-2 px-5 py-1 flex-row h-[50px] w-[300px] rounded-[20px]">
            <img src={favicon} alt="favicon" className="h-[35px] w-[35px]" />
            <div>
                <p className="text-[10px] sm:text-[12px]">Find verified real estate listings with</p>
                <p className="text-[10px] sm:text-[12px] font-[500]">DitropREALTY</p>
            </div>
        </div>
        <div className="bg-white flex gap-2 px-5 py-1 flex-row h-[50px] w-[300px] rounded-[20px]">
            <img src={favicon} alt="favicon" className="h-[35px] w-[35px]"/>
            <div>
                <p className="text-[10px] sm:text-[12px]">Go anywhere, anytime with</p>
                <p className="text-[10px] sm:text-[12px] font-[500]">DitropGO</p>
            </div>
        </div>
        <div className="bg-white flex gap-2 px-5 py-1 flex-row h-[50px] w-[300px] rounded-[20px]">
            <img src={favicon} alt="favicon" className="h-[35px] w-[35px]" />
            <div>
                <p className="text-[10px] sm:text-[12px]">Order food on demand with</p>
                <p className="text-[10px] sm:text-[12px] font-[500]">DitropFOOD</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Intro;
