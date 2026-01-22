import road from "../../assets/Trees.png";
import Button from "../buttons/Button";

const Facts = () => {
  const facts = [
    "At Ditrop, we call ourselves “Ditrop Marines” because getting things done with purpose is basically our thing.",
    "That little curve in our logo is actually a smile. A reminder that no matter how advanced our solutions get, people will always come first.",
    "Ditrop was born from the simple idea that life doesn’t have to be complicated. And now there is a team of real people who spend their days and nights figuring out how to make life easier just for you.",
  ];

  return (
    <div className="bg-[#F5F8FF] py-20 overflow-hidden">
      {/* ================= FUN FACTS HEADER ================= */}
      <p className="sm:text-[20px] text-[16px] font-[600] mx-5">
        FUN FACTS
      </p>

      <p className="sm:text-[30px] text-[18px] font-[700] mb-8 mx-5">
        Did you know?
      </p>

      {/* ================= MOVING CARDS ================= */}
      <div className="relative overflow-hidden">
        <div className="flex gap-5 w-max animate-[scroll-left_40s_linear_infinite]">
          {[...facts, ...facts].map((fact, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px]
                         px-5 py-4
                         w-[300px] sm:w-[500px]
                         flex-shrink-0"
              style={{
                boxShadow: `
      0 -1px 0 0 #f2f3f7,
      0 16px 40px rgba(15, 23, 42, 0.06),
      0 0 0 1px #f2f3f7
    `,
              }}
            >
              <p className="sm:text-[16px] text-[12px] leading-relaxed">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANIMATION KEYFRAMES ================= */}
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>

      {/* ================= ROAD SECTION ================= */}
      <div className="relative mt-32 px-5 sm:px-10">
        {/* ROAD IMAGE */}
        <img
          src={road}
          alt="Road"
          className="w-full sm:h-full h-[500px] max-w-7xl mx-auto rounded-[20px]"
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-5 max-w-3xl">
            <h2
              className="font-['DM Sans']
                         text-[28px] sm:text-[50px]
                         font-[700] text-white
                         leading-tight"
            >
              Ready to live life
              <br />
              the Ditrop way?
            </h2>

            <p
              className="text-white sm:text-[16px] text-[12px]
                         mt-6 leading-relaxed"
            >
              Let’s simplify things. Whether it’s getting from point A to point
              B, finding the perfect place to call home, or just getting a meal
              you love, we’ve got you covered. Join us on this journey and let’s
              make life easier, together.
            </p>

            {/* EMAIL INPUT */}
            <div className="mt-8 relative max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-[#9dbbff] rounded-[20px]
                           px-4 pr-[130px] py-3
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
    </div>
  );
};

export default Facts;
