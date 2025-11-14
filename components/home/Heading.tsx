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
    <div className={`w-full flex flex-col xl:gap-7 gap-3 ${className}`}>
      <div className="flex flex-col gap-1">
        <h1 className="xl:text-5xl lg:text-4xl text-3xl w-full font-urbanist-600 text-[#181945] xl:leading-[55px]">
          {title}
        </h1>

        {subTitle && (
          <h1 className="xl:text-5xl lg:text-4xl text-3xl w-full font-urbanist-600 text-[#181945] xl:leading-[55px]">
            {subTitle}
          </h1>
        )}
      </div>
        
      {description && (
        <p className="lg:text-[#181945] max-md:text-justify text-[#8C94A3] xl:text-lg text-base font-urbanist lg:opacity-60">
          {description}
        </p>
      )}
    </div>
  );
};

export default memo(Heading);
