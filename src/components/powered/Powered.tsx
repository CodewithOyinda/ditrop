import Button from "../buttons/Button";
import poweredVideo from "../../assets/Video-Banner.mp4";

const Powered = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 bg-[#f9fafb] py-10 px-6">
      <div>
        <video
          src={poweredVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-[450px] max-w-full h-auto rounded-[20px]"
        />
      </div>

      <div className="max-w-[450px]">
        <p className="font-['DM Sans'] text-[28px] sm:text-[50px] font-[600] text-gray-900 pt-10 pb-4">
          Smiles Powered by Ditrop
        </p>

        <p className="text-gray-600">
          Ditrop makes life easier and more joyful. Experience the
          convenience and happiness powered by Ditrop.
        </p>

        {/* Email input with button */}
        <div className="mt-10">
          <div className="relative">
            <input
              type="email"
              placeholder="Your email"
              className="w-full border border-[#9dbbff] rounded-[20px] px-4 pr-[130px] py-3 
                         focus:outline-none focus:ring-2 focus:ring-[#0a54ff]
                         bg-[#e6eeff] text-[#5c667b]"
            />

            <div className="absolute right-1 top-1/2 -translate-y-1/2">
              <Button size="blue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powered;
