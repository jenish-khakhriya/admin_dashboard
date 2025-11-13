import Image from "next/image";
import Heading from "./Heading";
import Download from "./Download";
import { StoreType } from "@/utils/type";

const Store = ({ data }:{data : StoreType}) => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center pt-[50px] pb-[80px] ">
      <div className="w-[1240px] flex gap-6 items-center rounded-[38px] bg-[#F8E6DE] p-[60px]">
        <Image
          src={data?.image}
          alt="logo"
          className="w-[510px] object-contain"
          width={500}
          height={300}
        />
        <div className="flex flex-col gap-[30px]">
            <Heading title={data?.title} description={data?.description} className={"!gap-6"}/>
            <Download />
        </div>
      </div>
    </div>
  );
};

export default Store;
