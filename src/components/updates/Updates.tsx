import { Link } from "react-router-dom";
import marketing from "../../assets/bg-ditrop.png";
import { FiSearch } from "react-icons/fi";

const Updates = () => {
  return (
    <div className="bg-[#fcfdff] py-20">
      {/* WHITE CARD WITH GLOW */}
      <div
        className="
          flex flex-col lg:flex-row
          justify-center gap-10
          bg-white
          mx-5 lg:mx-10
          mt-20
          rounded-[20px]
          p-8
        "
        style={{
          boxShadow: `
      0 -1px 0 0 #f2f3f7,
      0 16px 40px rgba(15, 23, 42, 0.06),
      0 0 0 1px #f2f3f7
    `,
        }}
      >
        {/* IMAGE */}
        <div className="flex-shrink-0">
          <img
            src={marketing}
            alt="marketing"
            className="w-full max-w-[600px] rounded-[16px]"
          />
        </div>

        {/* TEXT */}
        <div className="max-w-[500px] flex flex-col justify-between">
          <p className="sm:text-[22px] text-[18px] font-[700]">
            Marketing Your Small Business in Canada Without Breaking the Bank:
            Free & Affordable Tips
          </p>

          <p className="mt-2 text-gray-500 leading-relaxed">
            Discover effective strategies to market your Canadian small business
            without overspending. Learn practical, free methods for enhancing
            your online presence and leveraging affordable tools to grow
            sustainably.
          </p>

          <p className="mt-2 text-sm">April 9, 2025</p>
        </div>
      </div>
      <div className="mt-30 mx-15 flex flex-col items-center justify-between md:flex-row">
        <p className="sm:text-[30px] text-[18px] pt-5 font-[700] ">
          Latest Updates
        </p>
        <div className="relative px-5 sm:px-10">
            <input
              type="search"
              placeholder="Search Blog"
              className="w-[400px] border-2 border-[#99a1b5] rounded-[10px]
                                       px-4 pr-[130px] py-3
                                       focus:outline-none 
                                       bg-[#f7f9ff] text-[#99a1b5]"
            />
            <FiSearch color="#99a1b5" className="absolute right-15 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      <div className="mx-15 mt-15 flex flex-row gap-4">
         <Link to="/" className="sm:text-[16px] text-[12px] font-[600] hover:bg-[#0a54ff] text-black bg-[#e6eeff] hover:text-[#ffff] h-[40px] w-[100px] rounded-[10px] flex items-center justify-center">
         Growth
         </Link>
         <Link to="/" className="sm:text-[16px] text-[12px] font-[600] hover:bg-[#0a54ff] text-black bg-[#e6eeff] hover:text-[#ffff] h-[40px] w-[100px] rounded-[10px] flex items-center justify-center">
         Business
         </Link>
         <Link to="/" className="sm:text-[16px] text-[12px] font-[600] hover:bg-[#0a54ff] text-black bg-[#e6eeff] hover:text-[#ffff] h-[40px] w-[200px] rounded-[10px] flex items-center justify-center">
         Thought Leadership
         </Link>
         <Link to="/" className="sm:text-[16px] text-[12px] font-[600] hover:bg-[#0a54ff] text-black bg-[#e6eeff] hover:text-[#ffff] h-[40px] w-[120px] rounded-[10px] flex items-center justify-center">
         CEO's corner
         </Link>
      </div>
    </div>
  );
};

export default Updates;
