import Image from "next/image";
import Heading from "./Heading";
import Download from "./Download";
import { StoreType } from "@/utils/type";
import { memo } from "react";


const Store = ({ data }:{data : StoreType}) => {
  return (
    <div className="w-full lg:bg-white bg-[#F8E6DE] flex flex-col justify-center items-center xl:pt-[50px] xl:pb-[80px] md:py-6 py-4 xl:px-0 md:px-5 px-2">
      <div className="xl:w-[1240px] w-full xl:flex grid lg:grid-cols-2 grid-cols-1 gap-6 items-center lg:rounded-[38px] bg-[#F8E6DE] xl:p-[60px]">
        <Image
          src={data?.image}
          alt="logo"
          className="xl:w-[510px] w-full object-contain"
          width={500}
          height={300}
        />
        <div className="w-full flex flex-col md:gap-[30px] gap-4">
            <Heading title={data?.title} description={data?.description} className={"!gap-6"}/>
            <Download />
        </div>
      </div>
    </div>
  );
};

export default memo(Store);
