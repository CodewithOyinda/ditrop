import { useEffect, useState } from "react";
import ditropgo from "../../assets/DitropGO.png";
import ditropgoadvert from "../../assets/Ditrop-GO-Advert.png";
import ditropsme from "../../assets/SMELogo-white.png";
import ditropsmeadvert from "../../assets/Group-44.png";
import Button from "../buttons/Button";

const AUTO_SLIDE_INTERVAL = 5000;

const Ditropcard = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 1 ? 0 : 1));
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#E6EEFF] py-12 px-4">
      <div className="relative max-w-5xl mx-auto">
        {/* ================= SLIDE 1 ================= */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out
            ${current === 0
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          <div className="flex flex-col md:flex-row w-full">
            {/* LEFT */}
            <div className="bg-[#00A86B] text-white p-6 pt-15 md:p-10 md:pt-20
                            rounded-t-[30px] md:rounded-l-[30px] md:rounded-tr-none
                            w-full md:w-[300px] h-[250px] md:h-[300px]">
              <img src={ditropgo} alt="DitropGO" className="w-[140px] md:w-[150px]" />
              <p className="mt-4 text-[17px] md:text-base">
                Get safe, reliable, and affordable rides anytime, anywhere right on your mobile phone.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-white flex flex-col md:flex-row
                            rounded-b-[30px] md:rounded-r-[30px] md:rounded-bl-none
                            w-full">
              {/* Image first on mobile */}
              <img
                src={ditropgoadvert}
                alt="DitropGO advert"
                className="order-1 md:order-2
                           w-full md:w-[300px]
                           h-auto md:h-[300px]
                           object-cover
                           rounded-b-[30px] md:rounded-none md:rounded-r-[30px]"
              />

              {/* Text */}
              <div className="order-2 md:order-1 flex-1 p-6">
                <p className="text-[20px] md:text-[22px] font-[400]">
                  If it's reachable, we can get you there
                </p>
                <p className="mt-2 text-sm">
                  DitropGO lets you order car rides directly to your location.
                </p>
                <p className="mt-4 font-bold text-[#0a54ff] text-sm">
                  Coming soon to Android and iOS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= SLIDE 2 ================= */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out
            ${current === 1
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          <div className="flex flex-col md:flex-row w-full">
            {/* LEFT */}
            <div className="bg-[#7D44FF] text-white p-6 pt-15 md:p-10 md:pt-20
                            rounded-t-[30px] md:rounded-l-[30px] md:rounded-tr-none
                            w-full md:w-[300px] h-[250px] md:h-[300px]">
              <img src={ditropsme} alt="DitropSME" className="w-[140px] md:w-[150px]" />
              <p className="mt-4 text-[17px] md:text-base">
                Access affordable digital solutions to boost your online presence and grow your brand.
              </p>
            </div>

            {/* RIGHT */}
            <div className="bg-white flex flex-col md:flex-row
                            rounded-b-[30px] md:rounded-r-[30px] md:rounded-bl-none
                            w-full">
              {/* Image first on mobile */}
              <img
                src={ditropsmeadvert}
                alt="DitropSME advert"
                className="order-1 md:order-2
                           w-full md:w-[300px]
                           h-auto md:h-[300px]
                           object-cover
                           rounded-b-[30px] md:rounded-none md:rounded-r-[30px]"
              />

              {/* Text */}
              <div className="order-2 md:order-1 flex-1 p-6">
                <p className="text-[20px] md:text-[22px] font-[400]">
                  Your business dreams?
                </p>
                <p className="text-[20px] md:text-[22px] font-[400]">
                  We’ll help build them.
                </p>
                <p className="mt-2 text-sm">
                  DitropSME offers affordable digital solutions to turn your
                  vision into reality.
                </p>
                <Button size="getstarted" to="/ditropsme" className="mt-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Spacer to preserve height */}
        <div className="min-h-[800px] md:min-h-[300px]" />

      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-6">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all ${
              current === index
                ? "bg-[#0a54ff] w-6"
                : "bg-gray-300 w-2.5"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Ditropcard;
