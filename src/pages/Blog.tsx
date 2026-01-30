import Subscribe from "../components/subscribe/Subscribe";
import Updates from "../components/updates/Updates";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import bg from "../assets/Rectangle-bg.png";

const Blog = () => {
  return (
    <>
      <Hero />
      <div className="bg-[#F5F8FF]">
        <div className="relative">
          {/* Background */}
          <img
            src={bg}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10  pt-10 pb-10">
            <h2
              className="font-['DM Sans']
                         text-[28px] sm:text-[52px]
                         font-[700] 
                         mx-10
                         sm:pt-0
                         pt-15
                         "
            >
              Blog
            </h2>
            <p className="text-[14px] sm:text-[24px] mx-10 sm:w-[500px] w-[300px] text-gray-500 pt-5 pb-5">
              We don’t just write, we connect, engage, and inspire. Every piece
              of content we create is crafted to resonate with our audience.
            </p>
          </div>
        </div>
        <Updates />
        <Subscribe />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
