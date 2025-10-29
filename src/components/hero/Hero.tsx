import { useEffect, useState } from "react";
import logo from "../../assets/Logo-ditrop.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import Button from "../buttons/Button";

const Hero = () => {
  const [open, setOpen] = useState(false);

  // Prevent body scroll when sheet is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : original || "";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Smooth in-page scroll + close mobile sheet
  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 10);
  };

  return (
    <>
      {/* HEADER BAR */}
      <header className="sticky top-0 z-40 bg-[#E6EEFF] backdrop-blur border-b border-[#cad5ea]">
        <div className=" max-w-6xl h-16 md:h-[92px] px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[44px] w-auto md:h-[35px]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 font-['Inter'] text-[16px] font-[500]">
            <a
              href="#about"
              onClick={handleNav("home")}
              className="hover:text-[#A30005]"
            >
             About Ditrop
            </a>
            <a
              href="#resources"
              onClick={handleNav("product")}
              className="hover:text-[#A30005] flex items-center"
            >
              <p>Resources</p>
              <RiArrowDropDownLine />
            </a>
          </nav>

          {/* button actions */}
          <div className="hidden md:flex items-center gap-4 text-[#A30005]">
            <Button size="white"/>
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-3 text-[#A30005]">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 rounded-md hover:bg-black/5"
            >
              
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SHEET  */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet */}
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-[100%] max-w-sm bg-white shadow-xl p-6 flex flex-col z-10 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <img
                src={logo}
                alt="Logo"
                className="h-[44px] w-auto md:h-[70px]"
              />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-black/5"
              >
                
              </button>
            </div>

            <nav className="mt-6 space-y-4 font-['Inter'] text-[16px] font-[600]">
              <a
                href="#about"
                onClick={handleNav("home")}
                className="block hover:text-[#A30005]"
              >
                About Ditrop
              </a>
              <a
                href="#resources"
                onClick={handleNav("product")}
                className="block hover:text-[#A30005]"
              >
                Resources
              </a>
             
            </nav>

            <div className="mt-auto pt-6 border-t flex items-center gap-4 text-[#A30005]">
              <a
                href="tel:+2348142398699"
                className="underline font-['Mona_Sans'] text-[16px]"
              >
                +2348142398699
              </a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Hero;
