import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { PocketDataType } from "@/utils/type";

const PocketPay = ({ data } : {data : PocketDataType}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center py-[80px]">
      <div className="w-[1240px] flex flex-col items-center gap-9">
        <Heading className={"!gap-5"} title={data?.title} description={data?.description} />
        <div className="w-full grid grid-cols-4 gap-5">
          {data?.arr?.map((item, index: number) => {
            return (
              <div className="w-full flex flex-col gap-5 p-6 bg-white rounded-2xl transition-all duration-150 hover:shadow-custom cursor-pointer">
                <Image
                  src={item?.icon}
                  alt="logo"
                  className="w-12 h-12 object-contain"
                  width={500}
                  height={300}
                />
                <div className="flex flex-col gap-[16px]">
                    <h3 className="text-[24px] font-urbanist-600 text-[#383940]">
                      {item?.title}
                    </h3>
                    <p className="text-sm font-urbanist text-[#181945] opacity-60 leading-7">
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

export default PocketPay;
