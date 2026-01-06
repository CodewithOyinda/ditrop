import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import thumbnail from "../../assets/Thumbnail.png";
import coverone from "../../assets/Cover-11.webp";
import covertwo from "../../assets/Cover-10.webp";
import coverthree from "../../assets/Cover-9.webp";
import coverfour from "../../assets/Cover-6.webp";
import coverfive from "../../assets/Cover-5.webp";
import coversix from "../../assets/Cover-4.webp";
import coverseven from "../../assets/Cover-2.webp";
import covereight from "../../assets/Checklist.webp";

const posts = [
  { img: coverone, title: "How New Brunswick Entrepreneurs Can Make the Most of Digital Marketing", desc: "In today's fast-paced, digital-first world, your business needs a solid online presence to stay competitive especially i.." },
  { img: covertwo, title: "The Ultimate Guide to Starting a Business in New Brunswick", desc: "New Brunswick is quickly becoming a hotspot for small businesses. With its supportive community, accessible..." },
  { img: coverthree, title: "Top 7 Social Media Mistakes Brunswick Entrepreneurs Still Make in...", desc: "If you're an entrepreneur in Saint John, Frederiction, or anywhere in New Brunswick and your social media isn't.." },
  { img: coverfour, title: "Marketing Your Small Business in Canada Without Breaking the Bank: Free &...", desc: "Hey there, Canadian small business owner! Running your own business is amazing, right? You're passionate, driven, and..." },
  { img: coverfive, title: "App Development for SMEs: How to Build an App for Free", desc: "SMEs can now develop mobile apps for free using no-code and low-code platforms. This guide explains how to..." },
  { img: coversix, title: "How to Market Your Small Business and Build a strong Brand", desc: "In today's cometitive landscape, having a gret product or service is not enough. If peole don't know about your business..." },
  { img: coverseven, title: "Digital Marketing for SMEs: Unlocking Growth and Success Online", desc: "Small and medium-sized enterprises (SMEs) need digital marketing to scale, compete, and thrive in today's market..." },
  { img: covereight, title: "SME Digital Marketing Checklist", desc: "Businesses need a good marketing lan to succeed. Whether you're just starting or already established, using a checklist..." },
];

const AUTO_SLIDE_INTERVAL = 4000;

const More = () => {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Handle responsiveness
  useEffect(() => {
    const updateCards = () => {
      setCardsPerView(window.innerWidth >= 768 ? 3 : 1);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev >= posts.length - cardsPerView ? 0 : prev + 1
      );
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [cardsPerView]);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? posts.length - cardsPerView : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev >= posts.length - cardsPerView ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-[#E6EEFF] py-12">
      {/* Thumbnail */}
      <div className="flex justify-center mb-10 mx-4 sm:mx-10">
        <img src={thumbnail} alt="thumbnail" className="rounded-[15px]" />
      </div>

      <div className="bg-white mx-4 sm:mx-10 p-6 rounded-[30px]">
        <p className="text-[22px] sm:text-[24px] font-[700] mt-15">
          Latest from our blog
        </p>
        <p className="text-sm text-gray-600 mb-6 pt-2 md:w-[450px] w-[300px]">
          Stay informed and inspired with our latest insights on how Ditrop is transforming everyday life.
        </p>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / cardsPerView)}%)`,
            }}
          >
            {posts.map((post, index) => (
              <div
                key={index}
                className={`flex-shrink-0 px-3 ${
                  cardsPerView === 3 ? "w-1/3" : "w-full"
                }`}
              >
                <div className="bg-white">
                  <img
                    src={post.img}
                    alt="cover"
                    className="rounded-t-[15px] mb-3 w-full mt-7"
                  />
                  <p className="font-[600] text-sm mb-2">
                    {post.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {post.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="flex flex-row justify-between">
          {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: posts.length - cardsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${
                current === index
                  ? "bg-[#0a54ff] w-5"
                  : "bg-gray-200 w-2.5"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6 mb-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center "
          >
            <FaChevronLeft color="#0a54ff"/>
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center "
          >
            <FaChevronRight color="#0a54ff" />
          </button>
        </div>

        
        </div>
      </div>
    </div>
  );
};

export default More;
