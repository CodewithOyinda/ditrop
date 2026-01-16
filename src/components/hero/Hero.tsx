import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo-ditrop.png";
import rectangle from "../../assets/Rectangle.png";

import { RiArrowDropDownLine } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import {
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { RiBloggerFill } from "react-icons/ri";
import { MdPlayLesson } from "react-icons/md";
import { BiSolidBarChartAlt2 } from "react-icons/bi";

import Button from "../buttons/Button";
import WaitlistModal from "../modals/WaitlistModal";

const socials = [
  { Icon: FaLinkedin, label: "LinkedIn" },
  { Icon: FaXTwitter, label: "X (Twitter)" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaFacebook, label: "Facebook" },
];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (!menuOpen) setResourcesOpen(false);
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-[#E6EEFF] backdrop-blur border-b border-[#cad5ea]">
        <div className="max-w-6xl h-16 md:h-[92px] px-5 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="inline-flex items-center">
            <img src={logo} alt="Ditrop Logo" className="h-[35px] md:h-[40px]" />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10 font-['Inter'] text-[16px] font-[500]">

            {/* About */}
            <Link to="/about" >
              About Ditrop
            </Link>

            {/* Resources (Hover) */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1">
                <span>Resources</span>
                <RiArrowDropDownLine className="text-[22px]" />
              </button>

              {resourcesOpen && (
                <div
                  className="absolute left-1/2 top-full mt-4 -translate-x-1/2
                             w-[520px] bg-[#F5F8FF] rounded-[24px]
                             shadow-xl border border-[#E6EEFF]
                             p-6 flex gap-6 z-50"
                >
                  {/* Left */}
                  <div className="flex flex-col gap-6 flex-1">
                    <div className="flex items-center gap-4 cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-[#E6EEFF] flex items-center justify-center">
                        <RiBloggerFill size={26} color="#0a54ff" />
                      </div>
                      <Link to="/blog">Blog</Link>
                    </div>

                    <div className="flex items-center gap-4 cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-[#E6EEFF] flex items-center justify-center">
                        <MdPlayLesson size={26} color="#0a54ff" />
                      </div>
                      <p className="font-[500]">Learn</p>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="w-[220px] h-[150px] rounded-[18px] overflow-hidden">
                    <img
                      src={rectangle}
                      alt="Resources"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Waitlist */}
          <div className="hidden md:flex">
            <Button size="white" onClick={() => setWaitlistOpen(true)} />
          </div>

          {/* ================= MOBILE ACTIONS ================= */}
          <div className="flex md:hidden items-center gap-3">
            <Button size="white" onClick={() => setWaitlistOpen(true)} />
            <button
              onClick={() => setMenuOpen(true)}
              className="p-2 rounded-md hover:bg-black/5"
            >
              <IoIosMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-full bg-[#E6EEFF]
                            shadow-xl p-6 z-10 overflow-y-auto">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#cad5ea] -mx-6 px-6 pb-4">
              <img src={logo} alt="Ditrop" className="h-[35px]" />
              <button onClick={() => setMenuOpen(false)}>
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* Nav */}
            <nav className="pt-6 flex flex-col text-[14px] gap-5">

              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About Ditrop
              </Link>

              {/* Resources Accordion */}
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between"
              >
                <span>Resources</span>
                <RiArrowDropDownLine
                  className={`transition-transform ${
                    resourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resourcesOpen && (
                <div className="bg-[#F5F8FF] rounded-[20px] p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <RiBloggerFill size={22} color="#0a54ff" />
                    <p>Blog</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <BiSolidBarChartAlt2 size={22} color="#0a54ff" />
                    <p>Thought Leadership</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdPlayLesson size={22} color="#0a54ff" />
                    <p>Learn</p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-6">
                {socials.map(({ Icon, label }) => (
                  <a key={label} href="#">
                    <Icon className="text-xl" />
                  </a>
                ))}
              </div>
            </nav>
          </aside>
        </div>
      )}

      {/* ================= WAITLIST MODAL ================= */}
      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </>
  );
};

export default Hero;
