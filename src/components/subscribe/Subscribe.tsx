import Button from "../buttons/Button";

const Subscribe = () => {
  return (
    <div className="bg-[#e6eeff]">
      <p className="md:text-[22px] text-[20px] font-[600] font-['DM Sans'] pt-20 font-[700] mx-10">
        Subscribe to our newsletter
      </p>
      <div className="flex sm:flex-row flex-col gap-20 mx-10 pb-20 items-center">
        <p>
          Get industry insights, market trends, and expert solutions directly in
          your inbox.
        </p>
        <div className="relative">
          <input
            type="email"
            placeholder="Your email"
            className="w-full border border-[#9dbbff] rounded-[20px]
                                       px-4 pr-[130px] py-3
                                       focus:outline-none  
                                       bg-[#ffff] text-[#5c667b]"
          />

          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <Button size="blue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
