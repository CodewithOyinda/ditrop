import Updates from "../components/updates/Updates";

const Blog = () => {
  return (
    <div className="bg-[#F5F8FF]">
      <h2
        className="font-['DM Sans']
                         text-[28px] sm:text-[50px]
                         font-[700] 
                         mx-15
                         "
      >
        Blog
      </h2>
      <p className="text-[10px] sm:text-[20px] mx-15 w-[500px] text-gray-500 pt-5 pb-5">
        We don’t just write, we connect, engage, and inspire. Every piece of
        content we create is crafted to resonate with our audience.
      </p>
      <Updates />
    </div>
  );
};

export default Blog;
