import { useEffect } from "react";
import bg from "../../assets/bg-1.png";
import road from "../../assets/Road.png";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative bg-[#F5F8FF] py-10 px-5 sm:px-10 overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-5">
        {/* ================= MISSION / VISION ================= */}
        <div
          className="flex flex-col sm:flex-row gap-6 items-start"
          data-aos="fade-down"
        >
          {/* IMAGE */}
          <img
            src={road}
            alt="road"
            className="w-full sm:max-w-[400px] h-[400px] rounded-[20px]"
          />

          {/* TEXT CARD */}
          <div className="bg-white w-full sm:max-w-[700px] px-5 rounded-[20px]">
            <p className="sm:text-[22px] text-[18px] font-[700] pt-7">
              Our Mission
            </p>
            <p className="sm:text-[16px] text-[12px] pt-5 leading-[2]">
              To simplify everyday life by building a unified platform that
              delivers essential services from mobility and food to housing and
              business tools in one seamless experience. At Ditrop, we’re
              committed to creating smart, accessible, and reliable solutions
              that help people live, work, and grow with ease.
            </p>

            <p className="sm:text-[22px] text-[18px] pt-5 font-[700]">
              Our Vision
            </p>
            <p className="sm:text-[16px] text-[12px] pt-5 pb-5 leading-[2]">
              To redefine the everyday living where people can get to access
              what they need, when they need it, all in one place. We envision a
              world where convenience isn’t a luxury, but a standard powered by
              technology, driven by purpose, and built for everyone.
            </p>
          </div>
        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="mt-20">
          <p className="sm:text-[20px] text-[16px] font-[600] mb-2">
            THE HEART OF DITROP
          </p>
          <p className="sm:text-[30px] text-[18px] font-[700] mb-8">
            Our Core Values
          </p>

          {/* ROW 1 */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:max-w-[400px]">
              <p className="sm:text-[16px] text-[12px] pt-5">
                Our values are the compass that guide how we build, serve, and
                grow. They reflect what we stand for and how we show up for the
                people and communities we serve.
              </p>
            </div>

            <div className="bg-[#e5f6f0] border-1 border-[#ffff] rounded-[20px] px-5 w-full sm:max-w-[400px]">
              <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                People First
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                We design for real needs, putting people at the center of every
                solution we offer.
              </p>
            </div>

            <div className="bg-[#fff0ee] border-1 border-[#ffff] rounded-[20px] px-5 w-full sm:max-w-[400px]">
              <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                Sustainability
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                We’re committed to building solutions that last for people,
                businesses, and communities.
              </p>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <div className="bg-[#fff6ea] border-1 border-[#ffff] rounded-[20px] px-5 w-full sm:max-w-[400px]">
              <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                Innovation with Purpose
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                We don’t just create. We create to solve problems.
              </p>
            </div>

            <div className="bg-[#f2ecff] border-1 border-[#ffff] rounded-[20px] px-5 w-full sm:max-w-[400px]">
              <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                Accessibility
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                We believe essential services should be within reach for
                everyone, not just a few.
              </p>
            </div>

            <div className="bg-[#e5f6f0] border-1 border-[#ffff] rounded-[20px] px-5 w-full sm:max-w-[400px]">
              <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                Integrity
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                We lead with transparency, honesty, and a deep sense of
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
