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
  "text-black sm:rounded-[15px]  rounded-[15px] flex items-center justify-center gap-[5px] font-['Inter'] font-[600] hover:bg-[#800004] transition-colors";

const sizes = {
  blue: "sm:h-[30px] h-[20px] w-[90px] sm:w-[150px] sm:text-[14px] text-white bg-[#0a54ff] text-[10px] px-4",
  white: "sm:h-[30px] border-2 border-[#000000] h-[30px] w-[120px] sm:w-[150px] sm:text-[14px] bg-white text-[10px] px-4",
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

      {/* Only show arrow for download button */}
      {size === "download" && <FaArrowRight />}
    </button>
  );
};

export default Button;
