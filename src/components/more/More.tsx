import thumbnail from "../../assets/Thumbnail.png"
import coverone from "../../assets/Cover-11.webp"
import covertwo from "../../assets/Cover-10.webp"
import coverthree from "../../assets/Cover-9.webp"
import coverfour from "../../assets/Cover-6.webp"
import coverfive from "../../assets/Cover-5.webp"
import coversix from "../../assets/Cover-4.webp"
import coverseven from "../../assets/Cover-2.webp"
import covereight from "../../assets/Checklist.webp"


const More = () => {
  return (
    <div className="bg-[#E6EEFF] py-10">
    <div className="flex items-center justify-center">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="rounded-[15px]"
      />
      </div>
      <div className="bg-white m-10 p-6 rounded-[30px]">
        <p className="text-[14px] sm:text-[18px] font-[700]">
                Latest from our blog
        </p>
        <p>
          Stay informed and inspired with our latest insights on how Ditrop is <br/> transorming everyday life.
        </p>
        <div className="flex flex-row">
        <div>
          <img
                src={coverone}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">How New Brunswick Entrepreneurs Can Make the Most of Digital Marketing</p>
              <p className="w-[150px] sm:w-[300px]">In today's fast-paced, digital-first world, your business needs a solid online presence to stay competitive especially i..</p>
        </div>
        <div>
          <img
                src={covertwo}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">The Ultimate Guide to Starting a Business in New Brunswick: Tools, Tips,...</p>
              <p className="w-[150px] sm:w-[300px]">New Brunswick is quickly becoming a hotspot for small businesses. With its supportive community, accessible...</p>
        </div>
        <div>
          <img
                src={coverthree}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">Top 7 Social Media Mistakes New Brunwisck Entrepreneurs Still Make in...</p>
              <p className="w-[150px] sm:w-[300px]"> If you're an entrepreneur in Saint John, Frederiction, or anywhere in New Brunswick and your social media isn't..</p>
        </div>
        <div>
          <img
                src={coverfour}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">Marketing Your Small Business in Canada Without Breaking the Bank: Free &...</p>
              <p className="w-[150px] sm:w-[300px]">Hey there, Canadian small business owner! Running your own business is amazing, right? You're passionate, driven, and...</p>
        </div>
        <div>
          <img
                src={coverfive}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">How New Brunswick Entrepreneurs Can Make the Most of Digital Marketing</p>
              <p className="w-[150px] sm:w-[300px]">In today's fast-paced, digital-first world, your business needs a solid online presence to stay competitive especially i..</p>
        </div>
        <div>
          <img
                src={coversix}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">How New Brunswick Entrepreneurs Can Make the Most of Digital Marketing</p>
              <p className="w-[150px] sm:w-[300px]">In today's fast-paced, digital-first world, your business needs a solid online presence to stay competitive especially i..</p>
        </div>
        <div>
          <img
                src={coverseven}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">How New Brunswick Entrepreneurs Can Make the Most of Digital Marketing</p>
              <p className="w-[150px] sm:w-[300px]">In today's fast-paced, digital-first world, your business needs a solid online presence to stay competitive especially i..</p>
        </div>
        <div>
          <img
                src={covereight}
                alt="cover"
                className="w-[150px] sm:w-[300px]"
              />
              <p className="w-[150px] sm:w-[300px]">How New Brunswick Entrepreneurs Can Make the Most of Digital Marketing</p>
              <p className="w-[150px] sm:w-[300px]">In today's fast-paced, digital-first world, your business needs a solid online presence to stay competitive especially i..</p>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default More
