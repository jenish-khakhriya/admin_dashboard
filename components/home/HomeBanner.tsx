



import Image from "next/image";
import Heading from "./Heading";
import Listing from "./Listing";
import Download from "./Download";
import { HomeBannerType } from "@/utils/type";
import { memo } from "react";

const HomeBanner = ({ data } : {data : HomeBannerType}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center xl:pt-[50px] xl:pb-[80px] md:py-6 py-4 xl:px-0 lg:px-6 md:px-5 px-3">
      <div className="xl:w-[1240px] w-full xl:flex grid lg:grid-cols-2 grid-cols-1 gap-6 items-center lg:rounded-[38px] lg:bg-white xl:px-[80px] lg:px-[40px] xl:py-[60px] lg:py-[30px]">
        <div className="flex flex-col xl:w-[546px] w-full shrink-0 xl:gap-[30px] gap-4">
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

export default memo(HomeBanner);
