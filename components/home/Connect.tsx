import { memo } from "react";
import Heading from "./Heading";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { ConnectType } from "@/utils/type";

const Connect = ({ data } : {data : ConnectType}) => {
  return (
    <div className="w-full bg-[#E6F0FD] flex flex-col justify-center items-center xl:py-[80px] md:py-6 py-4 xl:px-0 md:px-5 px-2">
      <div className="xl:w-[1240px] w-full grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
        <div className="flex flex-col lg:gap-[60px] gap-4">
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

export default memo(Connect);
