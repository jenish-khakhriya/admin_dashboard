import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  logo?: string;              
  className?: string;         
  children?: ReactNode;     
  onClick?: () => void;       
  type?: "button" | "submit" | "reset"; 
}

const Button: React.FC<ButtonProps> = ({
  logo,
  className = "",
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 ${className}`}
    >
      {children}
      {logo && (
        <Image
          src={logo}
          alt="logo"
          className="w-[18px] h-[18px] object-contain"
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default Button;
