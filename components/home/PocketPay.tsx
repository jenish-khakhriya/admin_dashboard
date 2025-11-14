import { memo } from "react";
import Heading from "./Heading";
import Image from "next/image";
import { PocketDataType } from "@/utils/type";



const PocketPay = ({ data } : {data : PocketDataType}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center xl:py-[80px] md:py-6 py-8 xl:px-0 md:px-5 px-2">
      <div className="xl:w-[1240px] w-full flex flex-col items-center md:gap-9 gap-4">
        <Heading className={"lg:!gap-5 gap-3"} title={data?.title} description={data?.description} />
        <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:gap-5 gap-2">
          {data?.arr?.map((item, index: number) => {
            return (
              <div key={index} className="w-full flex flex-col md:gap-5 gap-3 md:p-6 p-3 bg-white rounded-2xl transition-all duration-150 hover:shadow-custom cursor-pointer">
                <Image
                  src={item?.icon}
                  alt="logo"
                  className="w-12 h-12 object-contain"
                  width={500}
                  height={300}
                />
                <div className="flex flex-col md:gap-[16px] gap-2">
                    <h3 className="text-[24px] font-urbanist-600 text-[#383940]">
                      {item?.title}
                    </h3>
                    <p className="text-sm max-md:text-justify font-urbanist text-[#181945] opacity-60 leading-7">
                      {item?.description}
                    </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(PocketPay);
