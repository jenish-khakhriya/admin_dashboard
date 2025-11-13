



import Image from "next/image";
import Heading from "./Heading";
import Listing from "./Listing";
import Download from "./Download";
import { HomeBannerType } from "@/utils/type";

const HomeBanner = ({ data } : {data : HomeBannerType}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center pt-[50px] pb-[80px] ">
      <div className="w-[1240px] flex gap-6 items-center rounded-[38px] bg-white px-[80px] py-[60px]">
        <div className="flex flex-col w-[546px] shrink-0 gap-[30px]">
          <Heading title={data?.title} description={data?.description} />
          <Listing data={data?.arr ?? []} />
          <Download />
        </div>  
        <div className="w-full">
          <Image
            src={data?.image} 
            alt="logo"
            className="w-full object-contain"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
