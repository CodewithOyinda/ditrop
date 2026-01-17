import ceo from "../../assets/Ditrop-CEO.png";
import smile from "../../assets/Smile.png";
import key from "../../assets/Key.png";
import lady from "../../assets/Lady.png";

const Ceo = () => {
  return (
    <div className="bg-[#F5F8FF] py-20 px-5 sm:px-10 lg:px-20">
        <div className="flex flex-col mx-10 justify-center lg:flex-row items-center gap-10 max-w-7xl ">
          <div>
            <img src={ceo} alt="ceo" className="rounded-[20px] w-[400px] sm:w-[500px] "/>
            <h2 className="font-['DM Sans']
                         text-[28px] sm:text-[50px]
                         font-[700] text-[#0F172A] leading-[1] mt-6">
            Our Story:<br  />
            How It All Started
          </h2>
          <p className="text-[#0a54ff] sm:text-[14px] text-[14px] font-[600] mt-6">It started with a simple need: the need for life to be easier.</p>
          <p className="sm:w-[500px] w-[400px] sm:text-[16px] text-[14px] mt-6 leading-[2]">When Cole Samuel moved to a new city, everyday challenges quickly became clear, reliable transportation was rare, finding a good home felt overwhelming, and accessing basic services took more effort than it should. Simple things that should have made life flow smoothly were suddenly complicated.</p>
          </div>
          <div>
             <p className="sm:w-[500px] w-[400px] sm:text-[16px] text-[12px]">Rather than accept these struggles as the norm, he saw an opportunity  to create a different kind of platform. One where living, moving, and earning would be more connected, more accessible, and far less complicated for everyone, not just a few.</p>
             <p className="sm:w-[500px] w-[400px] sm:text-[16px] text-[12px] mt-7">What began as a series of personal frustrations quickly turned into the blueprint for something bigger. It became a bold idea: what if there was a single place people could trust for the essentials that keep life moving? </p>
             <p className="sm:w-[500px] w-[400px] sm:text-[16px] text-[12px] mt-7">On November 13, 2023, that idea became Ditrop Inc.</p>
             <p className="sm:w-[500px] w-[400px] sm:text-[16px] text-[12px] mt-7">A space where solutions are created with people in mind. Where the focus isn’t just on technology but on real, practical change that makes everyday life better.</p>
             <p className="sm:w-[500px] w-[400px] sm:text-[16px] text-[12px] mt-7">Today, Ditrop stands as proof that challenges can spark innovation and that small, personal experiences can grow into something powerful enough to impact lives across cities, communities, and borders.</p>
          </div>
        </div>
        <div className="mt-40">
            <p className="sm:text-[20px] text-[18px] font-[600]  mb-3 ">MEET DITROP</p>
            <p className="sm:text-[22px] text-[20px] font-[700] mb-8 ">Who We Are & What We Do</p>
            <div className="flex flex-col justify-center lg:flex-row items-center lg:items-start gap-10 max-w-7xl mx-auto">
               <div className="sm:w-[500px] w-[400px] sm:text-[16px] text-[12px]">
                <p>Ditrop Inc., is a dynamic and diversified company that operates across four key areas: real estate, ride-sharing, technology services, and innovative earnings models. Each of these ventures is designed to address critical needs in today’s world, centred around the themes of ‘Living,’ ‘Transit,’ ‘Earning,’ and ‘Technology.’</p>
                <p className="mt-7">Our focus is simple: to create smart, reliable, and sustainable solutions that make life easier for everyone. We strive to improve access, foster innovation, and simplify everyday needs, making things more manageable and convenient no matter where or when.</p>
                <p className="mt-7">With a clear vision and strong core values, we aim to leverage our services to create lasting value for our customers, partners, and stakeholders, driving growth, promoting innovation, and ensuring profitability for all involved.</p>
               
               </div>
               <div>
                <div className=" flex flex-row justify-between gap-4">
                  <img src={smile} alt="smile" className="rounded-[20px] w-[100px] sm:w-[160px] h-[400px]"/> 
                  <img src={key} alt="key" className="rounded-[20px] w-[100px] sm:w-[160px] h-[400px]"/>
                  <img src={lady} alt="lady" className="rounded-[20px] w-[100px] sm:w-[160px] h-[400px]"/> 
                </div>
               </div>
            </div>
        </div>
    </div>
  );
}

export default Ceo;
