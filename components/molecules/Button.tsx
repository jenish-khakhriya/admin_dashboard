  import { ButtonHTMLAttributes, FC } from "react";
  import Loader from "../atom/loader";

  interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean; 
    className?: string;
    type?: "button" | "submit" | "reset";
  }

  const Button: FC<ButtonProps> = ({
    isLoading = false,
    children,
    className = "",
    disabled,
    ...props
  }) => {
    return (
      <button
        {...props}
        disabled={disabled || isLoading}
        className={`bg-blue-500 text-white flex justify-center items-center py-2 px-4 rounded hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      >
        {isLoading ? (
          <Loader className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  };

  export default Button;
