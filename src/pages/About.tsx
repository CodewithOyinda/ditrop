import Hero from "../components/hero/Hero";
import Footer from "../components/footer/Footer";
import about from "../assets/AboutUs-Hero-Image.png";
import Ceo from "../components/ceo/Ceo";
import Values from "../components/values/Values";
import Facts from "../components/facts/Facts";

const About = () => {
  return (
    <>
    <Hero />
    <div className="relative min-h-screen overflow-hidden scroll-smooth">
      

      {/* GRADIENT SECTION */}
      <section className="relative bg-gradient-to-b
                          from-[#F4F8FF] via-[#EEF4FF] to-white
                          px-5 sm:px-10 pt-28 pb-32 text-center">

        {/* Glow */}
        <div className="pointer-events-none absolute
                        top-[45%] left-[20%]
                        w-[420px] h-full
                        rounded-full
                        bg-[#6B8CFF]/20
                        blur-[120px]" />

        <div className="relative z-10">
          <h2 className="font-['DM Sans']
                         text-[28px] sm:text-[50px]
                         font-[700] text-[#0F172A] leading-[1] ">
            All you need, <br  />
            all in one place.
          </h2>

          <p className="mt-5 text-[12px] sm:text-[20px]
                        text-[#64748B] max-w-xl mx-auto">
            One platform. All your essentials. No hassle.<br/>
            That’s the Ditrop way.
          </p>

          <img src={about} alt="About" className="mx-auto mt-12" />
        </div>
      </section>
       <Ceo/>
       <Values/>
       <Facts/>
      
    </div>
    <Footer />
    </>
  );
};

export default About;
