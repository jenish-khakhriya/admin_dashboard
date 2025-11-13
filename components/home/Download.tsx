import Image from "next/image";
import appleIcon from "../../public/assets/appleIcon.svg";
import googleIcon from "../../public/assets/googleIcon.svg";

const Download = () => {
  return (
    <div className="flex flex-col">
      <p className="text-[#858799] text-lg font-urbanist">
        Download Our App Now!
      </p>
      <div className="flex gap-2">
        <Image
          src={googleIcon}
          alt="logo"
          className="w-[160px] object-contain cursor-pointer"
          width={500}
          height={300}
        />
        <Image
          src={appleIcon}
          alt="logo"
          className="w-[160px] object-contain cursor-pointer"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Download;
