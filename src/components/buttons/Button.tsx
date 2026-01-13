import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type ButtonProps = {
  size?: "blue" | "white" | "download";
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const base =
  "text-black sm:rounded-[20px]  rounded-[15px] flex items-center justify-center gap-[5px] font-['Inter'] font-[600] transition-colors";

const sizes = {
  blue: "sm:h-[38px] h-[32px] w-[110px] sm:w-[140px] sm:text-[14px] text-white bg-[#0a54ff] text-[10px] px-4",
  white: "sm:h-[30px] border-2 border-[#000000] h-[30px] w-[120px] sm:w-[140px] sm:text-[14px] bg-white text-[10px] px-4",
  download: "sm:h-[30px] border-2 border-[#000000] h-[30px] w-[150px] sm:w-[180px] sm:text-[14px] bg-white text-[10px] px-4",
};

const Button: React.FC<ButtonProps> = ({
  size = "blue",
  className = "",
  children,
  type = "button",
  ...rest
}) => {
  // Pick default text automatically
  const defaultLabel =
    size === "download" ? "Download Free App" : "Join Waitlist";

  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${className}`}
      {...rest}
    >
      {/* Text */}
      {children ?? defaultLabel}

      <FaArrowRight />
    </button>
  );
};

export default Button;
