import Image from "next/image";
import appleIcon from "../../public/assets/appleIcon.svg";
import googleIcon from "../../public/assets/googleIcon.svg";
import { memo } from "react";

const Download = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[#858799] md:text-lg text-base font-urbanist">
        Download Our App Now!
      </p>
      <div className="flex gap-2">
        <Image
          src={googleIcon}
          alt="logo"
          className="md:w-[160px] w-32 object-contain cursor-pointer"
          width={500}
          height={300}
        />
        <Image
          src={appleIcon}
          alt="logo"
          className="md:w-[160px] w-32 object-contain cursor-pointer"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default memo(Download);
