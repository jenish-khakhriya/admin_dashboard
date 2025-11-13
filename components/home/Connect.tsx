import React from "react";
import Heading from "./Heading";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { ConnectType } from "@/utils/type";

const Connect = ({ data } : {data : ConnectType}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center py-[80px]">
      <div className="w-[1240px] grid grid-cols-2 gap-5 items-center">
        <div className="flex flex-col gap-[60px]">
          <Heading title={data?.title} description={data?.description} />
          <ContactForm />
        </div>
        <Image
          src={data?.image}
          alt="logo"
          className="w-full object-contain"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
};

export default Connect;
