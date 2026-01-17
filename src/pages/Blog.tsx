import Subscribe from "../components/subscribe/Subscribe";
import Updates from "../components/updates/Updates";

const Blog = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <h2
        className="font-['DM Sans']
                         text-[28px] sm:text-[50px]
                         font-[700] 
                         mx-10
                         sm:pt-0
                         pt-15
                         "
      >
        Blog
      </h2>
      <p className="text-[14px] sm:text-[20px] mx-10 sm:w-[500px] w-[300px] text-gray-500 pt-5 pb-5">
        We don’t just write, we connect, engage, and inspire. Every piece of
        content we create is crafted to resonate with our audience.
      </p>
      <Updates />
      <Subscribe/>
    </div>
  );
};

export default Blog;
