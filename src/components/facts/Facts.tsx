const Facts = () => {
  const facts = [
    "At Ditrop, we call ourselves “Ditrop Marines” because getting things done with purpose is basically our thing.",
    "That little curve in our logo is actually a smile. A reminder that no matter how advanced our solutions get, people will always come first.",
    "Ditrop was born from the simple idea that life doesn’t have to be complicated. And now there is a team of real people who spend their days and nights figuring out how to make life easier just for you.",
  ];

  return (
    <div className="bg-[#F5F8FF] py-20 overflow-hidden">
      <p className="sm:text-[20px] text-[16px] font-[600] mb-3 mx-5">
        FUN FACTS
      </p>
      <p className="sm:text-[22px] text-[18px] font-[700] mb-8 mx-5">
        Did you know?
      </p>

      {/* SCROLL CONTAINER */}
      <div className="relative overflow-hidden">
        <div
          className="
            flex gap-5 w-max
            animate-[scroll-left_40s_linear_infinite]
          "
        >
          {[...facts, ...facts].map((fact, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px]
                         px-5 py-4
                         w-[300px] sm:w-[500px]
                         flex-shrink-0"
            >
              <p className="sm:text-[16px] text-[12px]">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* KEYFRAMES */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Facts;
