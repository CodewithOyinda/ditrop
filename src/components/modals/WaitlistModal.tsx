import { useEffect } from "react";
import { HiX } from "react-icons/hi";
import phoneMockup from "../../assets/waitlist.png";
import Button from "../buttons/Button";


type Props = {
  open: boolean;
  onClose: () => void;
};

const WaitlistModal = ({ open, onClose }: Props) => {
  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-[70%] max-w-4xl
                      bg-white rounded-[32px] overflow-hidden
                      shadow-2xl flex flex-col md:flex-row">

        {/* LEFT (Blue panel) */}
        <div className="order-2 md:order-1 md:w-[30%]
                flex items-center justify-center relative">

          <img
            src={phoneMockup}
            alt="App preview"
            className="max-h-[420px] object-contain"
          />
        </div>

        {/* RIGHT (Content) */}
       <div className="order-1 md:order-2 flex-1 p-8 md:p-10 relative">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-black"
            aria-label="Close modal"
          >
            <HiX className="text-2xl" />
          </button>


          <h2 className="md:text-[30px] text-[20px] font-[600] mt-8 mb-4">
            Ditrop app is launching soon.
          </h2>

          <p className="mb-8">
            Be the first to get the Ditrop Super app when it launches
          </p>

          <div className="mt-15 relative">
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
  );
};

export default WaitlistModal;
