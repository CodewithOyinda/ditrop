import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type ButtonProps = {
  size?: "mini" | "large";
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const base =
  "bg-white text-black border border-[#000000] sm:rounded-[15px] rounded-[6px] flex items-center justify-center gap-[5px] font-['Inter'] font-[600] hover:bg-[#800004] transition-colors";

const sizes = {
  mini:  "sm:h-[30px] h-[20px] w-[90px] sm:w-[150px] sm:text-[14px] text-[10px] px-4",        
  large: "sm:h-[30px] h-[20px] w-[200px] sm:w-[450px] sm:text-[16px] text-[12px] px-6",         
};

const Button: React.FC<ButtonProps> = ({
  size = "mini",
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
