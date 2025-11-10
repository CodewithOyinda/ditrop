import bg from "../../assets/ditrop_footer_bg.png";
import logo from "../../assets/Logo-On-Other.png";
import {
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const socials = [
  { Icon: FaLinkedin, label: "Linkedin" },
  { Icon: FaXTwitter, label: "X (Twitter)" },
  { Icon: FaInstagram, label: "Instagram" },
  { Icon: FaFacebook, label: "Facebook" },
];

const circleCls =
  "rounded-full bg-[#1e49c2] flex items-center justify-center " +
  "w-9 h-9 md:w-10 md:h-10 transition-transform hover:scale-105";

const iconCls = "text-[clamp(0.8rem,1.5vw,1.5rem)]";

const Footer = () => {
  return (
    <div className="relative w-full min-h-screen bg-gray-50 overflow-hidden">
      {/* Background */}
      <img
        src={bg}
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-10 text-white">
        {/* Top Row */}
        <div className="flex flex-wrap justify-between items-start gap-10">
          <div>
            <img src={logo} alt="logo" className="w-[150px] mb-3" />
            <p>Revolutionising How You <br />Move, Live, and Earn</p>
          </div>

          <div>
            <p className="font-bold mb-2">Company</p>
            <p className="pt-4">About Ditrop</p>
            <p className="pt-3">Leadership Team</p>
            <p className="pt-3">Press Kit</p>
            <p className="pt-3">Blog</p>
          </div>

          <div>
            <p className="font-bold mb-2">Products</p>
            <p className="pt-4">DitropSME</p>
            <p className="pt-3">DitropGO</p>
          </div>

          <div>
            <p className="font-bold mb-2">Help</p>
            <p className="pt-4">Contact Us</p>
          </div>

          <div>
            <p className="font-bold mb-4">Connect</p>
            <div className="flex flex-wrap items-center gap-4">
              {socials.map(({ Icon, label }) => (
                <div key={label} className={circleCls} aria-label={label}>
                  <Icon className={iconCls} aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-5 border-b border-white pt-8 pb-15 flex flex-wrap justify-center items-start gap-20">
          {[
            { country: "Canada", location: "New Brunswick, Canada" },
            { country: "United States", location: "Texas, USA" },
            { country: "Nigeria", location: "Lagos, Nigeria" },
          ].map(({ country, location }) => (
            <div key={country}>
              <p className="font-bold">{country}</p>
              <div className="flex items-center gap-2 pt-4">
                <IoLocationOutline />
                <p>{location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>Copyright © 2025, Ditrop Inc.</p>
            <div className="flex items-center gap-6">
                <p>Terms</p>
                <p>Privacy</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
