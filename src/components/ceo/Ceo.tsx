import { useEffect } from "react";
import ceo from "../../assets/Ditrop-CEO.png";
import smile from "../../assets/Smile.png";
import key from "../../assets/Key.png";
import lady from "../../assets/Lady.png";
// @ts-ignore
import AOS from "aos";
import 'aos/dist/aos.css';

const Ceo = () => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);

  return (
    <div className="bg-[#F5F8FF] py-20 px-5 sm:px-10 lg:px-20">
      
      {/* ================= STORY SECTION ================= */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start" >
        
        {/* LEFT */}
        <div className="w-full lg:w-1/2" data-aos="fade-down">
          <img
            src={ceo}
            alt="CEO"
            className="w-full max-w-[520px] rounded-[20px]"
          />

          <h2 className="font-['DM Sans'] text-[28px] sm:text-[50px] font-[700] text-[#0F172A] leading-tight mt-8">
            Our Story:
            <br />
            How It All Started
          </h2>

          <p className="text-[#0a54ff] text-[14px] font-[600] mt-6">
            It started with a simple need: the need for life to be easier.
          </p>

          <p className="text-[14px] sm:text-[16px] mt-6 leading-[2] max-w-xl">
           When Cole Samuel moved to a new city, everyday challenges quickly became clear, reliable transportation was rare, finding a good home felt overwhelming, and accessing basic services took more effort than it should. Simple things that should have made life flow smoothly were suddenly complicated.
          </p>
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-1/2 space-y-6 text-[14px] sm:text-[16px] leading-relaxed" data-aos="fade-down">
          <p>
            Rather than accept these struggles as the norm, he saw an opportunity  to create a different kind of platform. One where living, moving, and earning would be more connected, more accessible, and far less complicated for everyone, not just a few.
          </p>

          <p>
            What began as a series of personal frustrations quickly turned into the blueprint for something bigger. It became a bold idea: what if there was a single place people could trust for the essentials that keep life moving?
          </p>

          <p>
            On November 13, 2023, that idea became Ditrop Inc.
          </p>

          <p>
            A space where solutions are created with people in mind. Where the focus isn’t just on technology but on real, practical change that makes everyday life better.
          </p>

          <p>
            Today, Ditrop stands as proof that challenges can spark innovation and that small, personal experiences can grow into something powerful enough to impact lives across cities, communities, and borders.
          </p>
        </div>
      </div>

      {/* ================= MEET DITROP ================= */}
      <div className="mt-32 max-w-7xl mx-auto">
        <p className="text-[18px] sm:text-[18px] font-[600] mb-2">
          MEET DITROP
        </p>
        <p className="text-[20px] sm:text-[30px] font-[700] mb-10">
          Who We Are & What We Do
        </p>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* TEXT */}
          <div className="w-full lg:w-1/2 space-y-6 text-[14px] sm:text-[16px] leading-relaxed" data-aos="fade-right">
            <p>
              Ditrop Inc., is a dynamic and diversified company that operates across four key areas: real estate, ride-sharing, technology services, and innovative earnings models. Each of these ventures is designed to address critical needs in today’s world, centred around the themes of ‘Living,’ ‘Transit,’ ‘Earning,’ and ‘Technology.’
            </p>

            <p>
              Our focus is simple: to create smart, reliable, and sustainable solutions that make life easier for everyone. We strive to improve access, foster innovation, and simplify everyday needs, making things more manageable and convenient no matter where or when.
            </p>

            <p>
              With a clear vision and strong core values, we aim to leverage our services to create lasting value for our customers, partners, and stakeholders, driving growth, promoting innovation, and ensuring profitability for all involved.
            </p>
          </div>

          {/* IMAGES */}
          <div className="w-full lg:w-1/2 flex justify-center gap-4" data-aos="fade-left">
            {[smile, key, lady].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt=""
                className="w-[30%] h-[400px] max-w-[160px] rounded-[20px] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
