import { useState } from "react";
import { Link } from "react-router-dom";
import marketing from "../../assets/bg-ditrop.png";
import { FiSearch } from "react-icons/fi";
import coverone from "../../assets/Cover-11.webp";
import covertwo from "../../assets/Cover-10.webp";
import coverthree from "../../assets/Cover-9.webp";
import coverfour from "../../assets/Cover-6.webp";
import coverfive from "../../assets/Cover-5.webp";
import coversix from "../../assets/Cover-4.webp";
import coverseven from "../../assets/Cover-2.webp";
import covereight from "../../assets/Checklist.webp";
import covernine from "../../assets/Cover-13.webp";
import coverten from "../../assets/Cover-12.webp";
import covereleven from "../../assets/Cover-15.webp";
import covertwelve from "../../assets/Cover-14.webp";
import coverthirteen from "../../assets/Cover-17.webp";
import coverfourteen from "../../assets/Cover-21.png";
import coverfifteen from "../../assets/Cover-16.png";
import coversixteen from "../../assets/Cover-19.png";
import coverseventeen from "../../assets/Cover-18.png";
import covereighteen from "../../assets/Cover-20.png";
import covernineteen from "../../assets/Cover-24.jpg";
import covertwenty from "../../assets/Cover-23.jpg";
import covertwentyone from "../../assets/Cover-27.webp";
import covertwentytwo from "../../assets/Cover-26.webp";
import covertwentythree from "../../assets/Cover-25.webp";
import covertwentyfour from "../../assets/Cover-22.webp";

const Updates = () => {
  const [loadStep, setLoadStep] = useState(0);

  return (
    <div className="bg-[#F5F8FF]">
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
      <div className="mt-30 mx-10 flex flex-col items-center justify-between md:flex-row">
        <p className="sm:text-[30px] text-[25px] pt-5 font-[700] ">
          Latest Updates
        </p>
        <div className="relative px-5 sm:px-10 hidden sm:block">
          <input
            type="search"
            placeholder="Search Blog"
            className="sm:w-[400px] w-[200px] border-2 border-[#99a1b5] rounded-[10px]
                                       px-4 pr-[130px] py-3
                                       focus:outline-none 
                                       bg-[#f7f9ff] text-[#99a1b5]"
          />
          <FiSearch
            color="#99a1b5"
            className="absolute right-15 top-1/2 transform -translate-y-1/2"
          />
        </div>
      </div>
      <div
        className="
    mt-6
    mx-10
    flex gap-4
    overflow-x-auto
    whitespace-nowrap
    scroll-smooth
    px-5
    sm:px-0
    sm:overflow-visible
    sm:flex-wrap
    scrollbar-hide
  "
      >
        {[
          { label: "Growth", width: "w-[140px]" },
          { label: "Business", width: "w-[160px]" },
          { label: "Thought Leadership", width: "w-[240px]" },
          { label: "CEO's Corner", width: "w-[180px]" },
        ].map((item) => (
          <Link
            key={item.label}
            to="/"
            className={`
        ${item.width}
        flex-shrink-0
        h-[44px]
        rounded-[12px]
        flex items-center justify-center
        text-[13px] sm:text-[16px]
        font-[600]
        bg-[#e6eeff]
        text-black
        hover:bg-[#0a54ff]
        hover:text-white
        transition-colors
      `}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div>
        <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-15">
          <div>
            <img
              src={coverone}
              alt="coverimage"
              className="rounded-t-[20px] h-[200px] w-[400px]"
            />
            <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
              <p className="font-[500]">
                In today’s fast-paced, digital-first world, your business needs
                a solid online presence to stay competitive especially in New...
              </p>
              <p className="pt-4 text-black">May 12, 2025</p>
            </div>
          </div>
          <div>
            <img
              src={covertwo}
              alt="coverimage"
              className="rounded-t-[20px] h-[200px] w-[400px]"
            />
            <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
              <p className="font-[500]">
                New Brunswick is quickly becoming a hotspot for small
                businesses. With its supportive community, accessible resources,
                and...
              </p>
              <p className="pt-4 text-black">May 12, 2025</p>
            </div>
          </div>
          <div>
            <img
              src={coverthree}
              alt="coverimage"
              className="rounded-t-[20px] h-[200px] w-[400px]"
            />
            <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
              <p className="font-[500]">
                If you’re an entrepreneur in Saint John, Fredericton, or
                anywhere in New Brunswick and your social media isn’t
                converting—this is...
              </p>
              <p className="pt-4 text-black">May 12, 2025</p>
            </div>
          </div>
        </div>
        <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
          <div>
            <img
              src={coverfour}
              alt="coverimage"
              className="rounded-t-[20px] h-[200px] w-[400px]"
            />
            <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
              <p className="font-[500]">
                Hey there, Canadian small business owner! Running your own
                business is amazing, right? You're passionate, driven, and
                building...
              </p>
              <p className="pt-4 text-black">April 9, 2025</p>
            </div>
          </div>
          <div>
            <img
              src={coverfive}
              alt="coverimage"
              className="rounded-t-[20px] h-[200px] w-[400px]"
            />
            <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
              <p className="font-[500]">
                SMEs can now develop mobile apps for free using no-code and
                low-code platforms. This guide explains how to choose the right
                tools,...
              </p>
              <p className="pt-4 text-black">April 8, 2025</p>
            </div>
          </div>
          <div>
            <img
              src={coversix}
              alt="coverimage"
              className="rounded-t-[20px] h-[200px] w-[400px]"
            />
            <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
              <p className="font-[500]">
                In today’s competitive landscape, having a great product or
                service is not enough. If people don’t know about your business,
                they...
              </p>
              <p className="pt-4 text-black">April 8, 2025</p>
            </div>
          </div>
        </div>
        {loadStep < 2 && (
  <div className="flex justify-center mt-10 mb-10">
    <button
      onClick={() => setLoadStep((prev) => prev + 1)}
      className="bg-white border border-black rounded-[20px] w-[120px] h-[40px] font-[500]"
    >
      Load More
    </button>
  </div>
)}
        {loadStep === 1 && (
          <>
            <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
              <div>
                <img
                  src={coverseven}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Small and medium-sized enterprises (SMEs) need digital
                    marketing to scale, compete, and thrive in today’s market.
                    From SEO and social...
                  </p>
                  <p className="pt-4 text-black">April 8, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covereight}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Businesses need a good marketing plan to succeed. Whether
                    you're just starting or already established, using a
                    checklist helps...
                  </p>
                  <p className="pt-4 text-black">March 28, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covernine}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    You don’t need me to tell you the digital market is crowded.
                    You already feel it. Every scroll, every click, every feed
                    refresh remind...
                  </p>
                  <p className="pt-4 text-black">March 6, 2025</p>
                </div>
              </div>
            </div>

            <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
              <div>
                <img
                  src={coverten}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Let’s be honest—choosing someone to build your business
                    website can feel like a lot. For small and medium-sized
                    businesses (SMEs),...
                  </p>
                  <p className="pt-4 text-black">March 6, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covereleven}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Let’s be honest—running a small business in Canada today is
                    no small feat. Between keeping up with the competition,
                    managing...
                  </p>
                  <p className="pt-4 text-black">March 6, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covertwelve}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Starting a business is exciting—until reality hits. You
                    realize you’re not the only one offering similar services.
                    Customers have...
                  </p>
                  <p className="pt-4 text-black">March 6, 2025</p>
                </div>
              </div>
            </div>
          </>
        )}
        {loadStep === 2 && (
          <>
            <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
              <div>
                <img
                  src={coverthirteen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    In today’s fast-paced digital landscape, SMEs need a strong online presence, effective branding, and a data-driven marketing...
                  </p>
                  <p className="pt-4 text-black">February 27, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={coverfourteen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    There’s excitement in the air here at Ditrop Inc. – but it’s not just the launch we’re thrilled about. What truly excites us is the differenc...
                  </p>
                  <p className="pt-4 text-black">February 27, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={coverfifteen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    The title "CEO" used to be rare, prestigious, and associated with business giants. Today, it's thrown around so casually that it has lost...
                  </p>
                  <p className="pt-4 text-black">February 26, 2025</p>
                </div>
              </div>
            </div>

            <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
              <div>
                <img
                  src={coversixteen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    AI and automation are essential for small business survival and growth: They are no longer luxuries but necessities.
                  </p>
                  <p className="pt-4 text-black">February 19, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={coverseventeen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    The future of retail is digital. Small and medium-sized enterprises (SMEs) that once relied solely on physical storefronts are now...
                  </p>
                  <p className="pt-4 text-black">February 19, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covereighteen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Small businesses are the backbone of global economies, yet many still struggle with inefficiencies, high operational costs, and th...
                  </p>
                  <p className="pt-4 text-black">February 19, 2025</p>
                </div>
              </div>
            </div>
          </>
        )}
        {loadStep === 3 && (
          <>
            <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
              <div>
                <img
                  src={covernineteen}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    You may be wondering, “What is Ditrop Inc. all about?” Another service company? Not quite. Ditrop Inc. was birthed from a deep desire t...
                  </p>
                  <p className="pt-4 text-black">January 20, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covertwenty}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    Starting a business is an exciting adventure full of potential. But as many entrepreneurs know, it’s not always smooth sailing.
                  </p>
                  <p className="pt-4 text-black">January 18, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covertwentyone}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    James had a dream—one of creating a business that could make a difference in his community. But like many small and medium...
                  </p>
                  <p className="pt-4 text-black">January 14, 2025</p>
                </div>
              </div>
            </div>

            <div className="sm:mx-15 mx-10 flex sm:flex-row flex-col gap-4 mt-10">
              <div>
                <img
                  src={covertwentytwo}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="font-[500]">
                    A few years ago, small businesses were mostly seen as humble local shops places where you could walk in and buy what you...
                  </p>
                  <p className="pt-4 text-black">January 10, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covertwentythree}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="pt-4 text-black">January 5, 2025</p>
                </div>
              </div>

              <div>
                <img
                  src={covertwentyfour}
                  alt="coverimage"
                  className="rounded-t-[20px] h-[200px] w-[400px]"
                />
                <div className="bg-[#e6eeff] rounded-b-[20px] p-7 text-gray-500">
                  <p className="pt-4 text-black">December 22, 2024</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Updates;
