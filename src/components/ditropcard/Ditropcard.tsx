import { useEffect, useState } from "react";
import ditropgo from "../../assets/DitropGO.png";
import ditropgoadvert from "../../assets/Ditrop-GO-Advert.png";
import ditropsme from "../../assets/SMELogo-white.png";
import ditropsmeadvert from "../../assets/Group-44.png";
import Button from "../buttons/Button";

const AUTO_SLIDE_INTERVAL = 5000;

const Ditropcard = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === 1 ? 0 : 1));
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#E6EEFF] py-12">
      {/* Slider container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* ===== SLIDE 1: DITROPGO ===== */}
          <div className="min-w-full flex justify-center">
            <div className="flex flex-row">
              <div className="bg-[#00A86B] text-white p-10 pt-20 rounded-l-[30px] h-[300px] w-[300px]">
                <img src={ditropgo} alt="ditropgo" className="w-[150px]" />
                <p className="mt-4">
                  Get safe, reliable, and affordable rides anytime, anywhere.
                </p>
              </div>

              <div className="bg-white flex flex-row rounded-r-[30px]">
                <div className="w-[400px] p-15">
                  <p className="font-[400] text-[12px] sm:text-[22px]">
                    If it's reachable, we can get you there
                  </p>
                  <p className="mt-2 text-sm">
                    DitropGO is Ditrop’s e-ride service that lets you order car
                    rides directly to your location.
                  </p>
                  <p className="mt-2 text-sm font-bold pt-6 text-[#0a54ff]">
                    Coming soon to Android and iOS
                  </p>
                </div>

                <img
                  src={ditropgoadvert}
                  alt="ditropgo advert"
                  className="h-[300px] w-[300px]"
                />
              </div>
            </div>
          </div>

          {/* ===== SLIDE 2: DITROPSME ===== */}
          <div className="min-w-full flex justify-center">
            <div className="flex flex-row">
              <div className="bg-[#7D44FF] text-white p-10 pt-20 rounded-l-[30px] h-[300px] w-[300px]">
                <img src={ditropsme} alt="ditropSME" className="w-[150px]" />
                <p className="mt-4">
                  Access affordable digital solutions to boost your online
                  presence.
                </p>
              </div>

              <div className="bg-white flex flex-row rounded-r-[30px]">
                <div className="w-[400px] p-15">
                  <p className="font-[400] text-[12px] sm:text-[22px]">Your business dreams?</p>
                  <p className="font-[400] text-[12px] sm:text-[22px]">We’ll help build them.</p>
                  <p className="mt-2 text-sm">
                    DitropSME offers affordable digital solutions to boost your
                    online presence and turn your vision into reality.
                  </p>
                  <Button size="blue" className="mt-4" />
                </div>

                <img
                  src={ditropsmeadvert}
                  alt="ditropsme advert"
                  className="h-[300px] w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
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
