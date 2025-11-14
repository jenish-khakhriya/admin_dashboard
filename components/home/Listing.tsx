import Image from "next/image";
import trueIcon from "../../public/assets/circleCheckFilled.svg";
import { memo } from "react";

const Listing = ({data} : {data : string[]}) => {
  return (
    <div className="flex flex-col xl:gap-4 gap-2">
      {data?.map((item: string, index: number) => {
        return (
          <div key={index} className="flex gap-3 items-center">
            <Image
              src={trueIcon}
              alt="logo"
              className="w-6 h-6 object-contain"
              width={500}
              height={300}
            />
            <p className="text-[#3B3E44] font-urbanist-400 xl:text-lg text-sm">{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Listing);
