import React, { ButtonHTMLAttributes, FC } from 'react'
import Loader from '../atom/loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isloading ?: boolean;  
  className?: string;     
  type?: "button" | "submit" | "reset"; 
}


const Button: FC<ButtonProps> = ({ isloading = false,children, className, disabled, ...props }) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`bg-blue-500 text-white flex justify-center items-center py-2 px-4 rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
    >
      {isloading ? (<Loader className='w-6 h-6 aspect-square border-4 border-y-white' />) : (children)}
    </button>
  );
};


export default Button;