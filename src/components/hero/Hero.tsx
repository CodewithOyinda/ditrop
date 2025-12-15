import { useEffect, useState } from "react";
import logo from "../../assets/Logo-ditrop.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import {
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import Button from "../buttons/Button";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn" },
  { Icon: FaXTwitter, label: "X (Twitter)" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaFacebook, label: "Facebook" },
];

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
        <div className="max-w-6xl h-16 md:h-[92px] px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="inline-flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-[35px] w-auto md:h-[40px]"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 font-['Inter'] text-[16px] font-[500]">
            <a
              href="#about"
              onClick={handleNav("about")}
              className="hover:text-[#A30005]"
            >
              About Ditrop
            </a>
            <a
              href="#resources"
              onClick={handleNav("resources")}
              className="hover:text-[#A30005] flex items-center"
            >
              <p>Resources</p>
              <RiArrowDropDownLine className="text-[22px]" />
            </a>
            
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-4 text-[#A30005]">
            <Button size="white" />
          </div>

          {/* Mobile actions */}
          <div className="flex md:hidden items-center gap-3 ">
            <Button size="white" />
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 rounded-md hover:bg-black/5"
            >
              <IoIosMenu className="text-2xl"/>
              {/* <HiMenuAlt3 className="text-2xl" /> */}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SHEET */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet */}
          <aside
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-full  bg-[#E6EEFF] shadow-xl p-6 flex flex-col z-10 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#cad5ea] -mx-6 pb-4 px-6">

              <img
                src={logo}
                alt="Logo"
                className="h-[35px] w-auto"
              />
              <Button size="download" />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-black/5"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            <nav className="flex flex-col font-['Inter'] pt-6 text-[13px]  text-[#1a1a1a]">
              <a href="#about" onClick={handleNav("about")} >
                About Ditrop
              </a>
              <a href="#resources" onClick={handleNav("resources")} className="pt-5">
                Resources
              </a>
              <a href="#help" onClick={handleNav("help")} className="pt-5">
                Help Center
              </a>
              <a href="#connect" onClick={handleNav("connect")} className="pt-5">
                Connect
              </a>
              <div className="flex items-center gap-5 pt-4">
                {socials.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="rounded-full bg-[#dfe9ff] flex items-center justify-center w-9 h-9 md:w-10 md:h-10 transition-transform hover:scale-105"
                  >
                    <Icon className="text-[18px]" />
                  </a>
                ))}
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
};

export default Hero;
