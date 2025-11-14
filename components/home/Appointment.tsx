import Heading from "./Heading";
import Button from "./Button";
import rightIcon from "../../public/assets/right.svg";
import Image from "next/image";
import { AppointmentType } from "@/utils/type";
import { memo } from "react";



const Appointment = ({ data } : {data : AppointmentType}) => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center xl:py-[80px] lg:py-[40px] md:py-6 py-4 xl:p-0 md:px-5 px-3">
      <div className="xl:w-[1240px] w-full grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-5 gap-2">
        <div className="w-full shrink-0 flex flex-col lg:gap-9 gap-4">
          <Heading
            className={""}
            description={data?.description}
            title={data?.title}
            subTitle={data?.subTitle}
          />
          <Button
            className={
              "font-urbanist w-fit text-sm transition-all duration-200 hover:!gap-3 text-white rounded-full px-[14px] bg-[#0666EB] py-[10px]"
            }
            logo={rightIcon}
          >
            Learn More
          </Button>
        </div>
        <div className="w-full">
          <Image
            src={data?.image}
            alt="logo"
            className="w-full lg:h-[426px] object-contain"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Appointment);
