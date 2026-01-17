import bg from "../../assets/bg-1.png";
import road from "../../assets/Road.png";

const Values = () => {
  return (
    <div className="bg-[#F5F8FF] py-5 px-5 sm:px-10 relative w-full min-h-screen overflow-hidden">
      <div>
        <img
          src={bg}
          alt="background"
          className="absolute inset-0 w-full  object-cover px-5 sm:px-5 rounded-[40px]"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-5">
          <div className="flex sm:flex-row flex-col gap-2">
            <img src={road} alt="road" className="h-[350px] w-[400px]" />
            <div className="bg-[#ffffff] px-5 rounded-[20px] sm:w-[700px] w-[350px]">
              <p className="sm:text-[22px] text-[18px] font-[700] pt-7">
                Our Mission
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5">
                To simplify everyday life by building a unified platform that
                delivers essential services from mobility and food to housing
                and business tools in one seamless experience. At Ditrop, we’re
                committed to creating smart, accessible, and reliable solutions
                that help people live, work, and grow with ease.
              </p>
              <p className="sm:text-[22px] text-[18px] pt-5 font-[700] ">
                Our Vision
              </p>
              <p className="sm:text-[16px] text-[12px] pt-5 mb-5">
                To redefine the everyday living where people can get to access
                what they need, when they need it, all in one place. We envision
                a world where convenience isn’t a luxury, but a standard powered
                by technology, driven by purpose, and built for everyone.
              </p>
            </div>
          </div>
          <div>
            <p className="sm:text-[20px] text-[16px] font-[600]  mb-2 mt-15">
              THE HEART OF DITROP
            </p>
            <p className="sm:text-[22px] text-[18px] font-[700] mb-8">
              Our Core Values
            </p>
            <div className="flex sm:flex-row flex-col gap-2">
              <div className="sm:w-[400px] w-[350px]">
                <p className="sm:text-[16px] text-[12px] pt-5">
                  Our values are the compass that guide how we build, serve, and
                  grow. They reflect what we stand for and how we show up for
                  the people and communities we serve.
                </p>
              </div>
              <div className="bg-[#e5f6f0] border-1 border-[#ffff] rounded-[20px] px-5 sm:w-[400px] w-[350px]">
                <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                  People First
                </p>
                <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                  We design for real needs, putting people at the center of
                  every solution we offer.
                </p>
              </div>
              <div className="bg-[#fff0ee] border-1 border-[#ffff] rounded-[20px] px-5 sm:w-[400px] w-[350px]">
                <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                  Sustainability
                </p>
                <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                  We’re committed to building solutions that last for people,
                  businesses, and communities.
                </p>
              </div>
            </div>
             <div className="flex sm:flex-row flex-col gap-2 mt-10">
              <div className="bg-[#fff6ea] border-1 border-[#ffff] rounded-[20px] px-5 sm:w-[400px] w-[350px]">
                <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                  Innovation with Purpose
                </p>
                <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                 We don’t just create. We create to solve problems.
                </p>
              </div>
              <div className="bg-[#f2ecff] border-1 border-[#ffff] rounded-[20px] px-5 sm:w-[400px] w-[350px]">
                <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                 Accessibility
                </p>
                <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                  We believe essential services should be within reach for everyone, not just a few.
                </p>
              </div>
              <div className="bg-[#e5f6f0] border-1 border-[#ffff] rounded-[20px] px-5 sm:w-[400px] w-[350px]">
                <p className="sm:text-[16px] text-[12px] pt-5 font-bold">
                  Integrity
                </p>
                <p className="sm:text-[16px] text-[12px] pt-5 pb-6">
                  We lead with transparency, honesty, and a deep sense of responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
