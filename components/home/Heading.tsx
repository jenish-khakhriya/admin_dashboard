import { memo } from "react";

interface HeadingProps {
  title: string;
  description?: string;
  className?: string;
  subTitle?: string;
}

const Heading = ({
  title,
  description,
  className = "",
  subTitle,
}: HeadingProps) => {
  return (
    <div className={`w-full flex flex-col gap-7 ${className}`}>
      <div className="flex flex-col gap-1">
        <h1 className="text-5xl w-full font-urbanist-600 text-[#181945] leading-[55px]">
          {title}
        </h1>

        {subTitle && (
          <h1 className="text-5xl font-urbanist-600 text-[#181945] leading-[55px]">
            {subTitle}
          </h1>
        )}
      </div>

      {description && (
        <p className="text-[#181945] text-lg font-urbanist opacity-60">
          {description}
        </p>
      )}
    </div>
  );
};

export default memo(Heading);
