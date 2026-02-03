import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

type ButtonProps = {
  size?: "blue" | "white" | "download" | "getstarted" | "contactus";
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  to?: string; // 👈 NEW
};

const base =
  "text-black sm:rounded-[20px] rounded-[15px] flex items-center justify-center gap-[5px] font-['Inter'] font-[600] transition-colors";

const sizes = {
  blue: "sm:h-[38px] h-[32px] w-[110px] sm:w-[140px] sm:text-[14px] text-white bg-[#0a54ff] text-[10px] px-4",
  white: "sm:h-[30px] border-2 border-[#000000] h-[30px] w-[120px] sm:w-[140px] sm:text-[14px] bg-white text-[10px] px-4",
  download: "sm:h-[30px] border-2 border-[#000000] h-[30px] w-[150px] sm:w-[180px] sm:text-[14px] bg-white text-[10px] px-4",
  getstarted: "sm:h-[38px] h-[32px] w-[110px] sm:w-[180px] sm:text-[14px] text-white bg-[#0a54ff] text-[10px] px-4",
  contactus: "sm:h-[30px] border-1 border-[#000000] h-[30px] w-[120px] sm:w-[140px] sm:text-[14px] bg-white text-[10px] px-4",
};

const labels = {
  blue: "Join Waitlist",
  white: "Join Waitlist",
  download: "Download Free App",
  getstarted: "Get Started Now",
  contactus: "Contact Us",
};

const Button: React.FC<ButtonProps> = ({
  size = "blue",
  className = "",
  children,
  type = "button",
  to,
  ...rest
}) => {
  const content = (
    <>
      {children ?? labels[size]}
      <FaArrowRight />
    </>
  );

  // ✅ If it's a link → use Link
  if (to) {
    return (
      <Link to={to} className={`${base} ${sizes[size]} ${className}`}>
        {content}
      </Link>
    );
  }

  // ✅ Normal button fallback
  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${className}`}
      {...rest}
    >
      {content}
    </button>
  );
};

export default Button;
