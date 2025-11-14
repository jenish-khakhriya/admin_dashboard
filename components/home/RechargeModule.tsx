import React, { memo } from "react";
import Heading from "./Heading";
import Image from "next/image";
import Button from "./Button";
import rightIcon from "../../public/assets/right.svg";
import { PaymentType } from "@/utils/type";

const RechargeModule = ({ data } : {data : PaymentType[]}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center xl:py-[50px] md:py-6 py-4 xl:p-0 md:px-5 px-2">
      <div className="xl:w-[1240px] w-full flex flex-col xl:gap-9 md:gap-5 gap-4 items-center rounded-[38px]">
        <Heading
          title={"Recharges & Bill Payments"}
          description={"Enjoy fast payments on every recharge & bill payment"}
          className={"!gap-3"}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full md:gap-5 gap-3">
          {data?.map((item, index: number) => {
            return (
              <div
                key={index}
                className="w-full cursor-pointer transition-all duration-200 hover:shadow-custom flex flex-col justify-center gap-3 items-center aspect-square bg-white rounded-2xl"
              >
                <Image
                  src={item?.icon} 
                  alt="logo"
                  className="w-[84px] h-[84px] object-contain"
                  width={500}
                  height={300}
                />
                <p className="text-sm text-[#3B3E44] font-urbanist">
                  {item?.name}
                </p>
              </div>
            );
          })}
        </div>
        <Button
          className={
            "font-urbanist text-sm transition-all duration-200 hover:!gap-3 text-white rounded-full px-[14px] bg-[#0666EB] py-[10px]"
          }
          logo={rightIcon}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default memo(RechargeModule);
