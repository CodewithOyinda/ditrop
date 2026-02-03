import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../buttons/Button";
import bg from "../../assets/bg-1.png";
import favicon from "../../assets/Favicon.png";
import introVideo from "../../assets/Chrome-Transparent-Video-vp9-chrome.webm";

const Intro = () => {
  const words = ["EARNING", "MOVING", "LIVING"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
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

          {/* ================= VIDEO (FIRST ON MOBILE) ================= */}
          <div className="order-1 sm:order-2 w-full sm:w-1/2">
  <div
    className="rounded-[20px] overflow-hidden"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <video
      src={introVideo}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-auto"
    />
  </div>
</div>

          {/* ================= TEXT (FIRST ON DESKTOP) ================= */}
          <div className="order-2 sm:order-1 w-full sm:w-1/2 md:px-15 px-0">
            {/* Top label */}
            <div className="bg-white flex rounded-[20px] sm:w-[380px] w-[280px]
                            items-center gap-2 font-['Inter']
                            sm:h-[45px] h-[30px]">
              <p className="bg-[#ff6b56] flex items-center justify-center gap-1
                            rounded-2xl text-white
                            sm:w-[120px] w-[70px]
                            sm:h-[30px] h-[25px]
                            text-[8px] sm:text-[14px]
                            sm:mx-5 mx-2">
                What's New <MdKeyboardArrowRight />
              </p>
              <button className="flex items-center gap-2 text-[10px] sm:text-[14px]">
                Check out Ditrop's blog <FaArrowRight />
              </button>
            </div>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[45px] font-['Inter'] mt-3">
              Your all-in-one app for
            </p>

            {/* Animated word */}
            <div className="h-[40px] sm:h-[60px] overflow-hidden flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={words[index]}
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="font-['DM Sans'] text-[20px] sm:text-[55px] font-[700]"
                >
                  {words[index]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-[10px] sm:text-[22px] text-gray-500 pt-5 pb-5">
              Manage your daily interactions and essential <br />
              services all in one place.
            </p>

            {/* Email box */}
            <div className="border border-[#9dbbff] rounded-[20px]
                            mt-4 p-4 w-[300px] sm:w-[500px]">
              <p className="text-[10px] sm:text-[14px] font-[500]">
                Be the first to get the Ditrop Super app when it launches
              </p>

              <div className="mt-5 relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-[#9dbbff] rounded-[20px]
                             px-4 pr-[130px] py-3
                             focus:outline-none focus:ring-2 focus:ring-[#0a54ff]
                             bg-[#e6eeff] text-[#5c667b]"
                />

                <div className="absolute right-1 top-1/2 -translate-y-1/2">
                  <Button size="blue" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FEATURE STRIPS — MOBILE (ANIMATED) ================= */}
        <div className="sm:hidden overflow-hidden mt-10">
          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[
              "DitropSME",
              "DitropREALTY",
              "DitropGO",
              "DitropFOOD",
              "DitropSME",
              "DitropREALTY",
              "DitropGO",
              "DitropFOOD",
            ].map((label, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white flex gap-2 px-5 py-2
                           h-[50px] min-w-[300px]
                           rounded-[20px] shadow-sm cursor-pointer"
              >
                <img src={favicon} alt="favicon" className="h-[35px] w-[35px]" />
                <div>
                  <p className="text-[10px] text-gray-600">
                    Experience the power of
                  </p>
                  <p className="text-[10px] font-[500]">
                    {label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= FEATURE STRIPS — DESKTOP (STATIC) ================= */}
        <div className="hidden sm:flex flex-wrap gap-3 mt-10">
          {["DitropSME", "DitropREALTY", "DitropGO", "DitropFOOD"].map((label) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white flex gap-2 px-5 py-2
                         h-[50px] w-[280px]
                         rounded-[20px] shadow-sm cursor-pointer"
            >
              <img src={favicon} alt="favicon" className="h-[35px] w-[35px]" />
              <div>
                <p className="text-[10px] sm:text-[12px] text-gray-600">
                  Experience the power of
                </p>
                <p className="text-[10px] sm:text-[12px] font-[500]">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
