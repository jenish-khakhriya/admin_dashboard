import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import Button from "./Button";
import rightIcon from "../../public/assets/right.svg";
import { PaymentType } from "@/utils/type";

const RechargeModule = ({ data } : {data : PaymentType[]}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center py-[50px]">
      <div className="w-[1240px] flex flex-col gap-9 items-center rounded-[38px]">
        <Heading
          title={"Recharges & Bill Payments"}
          description={"Enjoy fast payments on every recharge & bill payment"}
          className={"!gap-5"}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] w-full gap-5">
          {data?.map((item, index: number) => {
            return (
              <div
                key={index}
                className="w-full cursor-pointer transition-all duration-200 hover:shadow-custom flex flex-col justify-center gap-3 items-center aspect-square bg-white rounded-2xl"
              >
                <Image
                  src={item?.icon} // path relative to public/
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

export default RechargeModule;
