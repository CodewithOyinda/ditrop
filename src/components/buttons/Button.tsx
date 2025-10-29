import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type ButtonProps = {
  size?: "blue" | "white";
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const base =
  "text-black sm:rounded-[15px] rounded-[6px] flex items-center justify-center gap-[5px] font-['Inter'] font-[600] hover:bg-[#800004] transition-colors";

const sizes = {
  blue:  "sm:h-[30px] h-[20px] w-[90px] sm:w-[150px] sm:text-[14px] text-white bg-[#0a54ff] text-[10px] px-4",        
  white: "sm:h-[30px]  border border-[#000000] h-[20px] w-[90px] sm:w-[150px] sm:text-[14px] bg-white text-[10px] px-4",         
};

const Button: React.FC<ButtonProps> = ({
  size = "blue",
  className = "",
  children = "Join Waitlist",
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`${base} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
      <FaArrowRight />
    </button>
  );
};

export default Button;
