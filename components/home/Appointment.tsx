import Heading from "./Heading";
import Button from "./Button";
import rightIcon from "../../public/assets/right.svg";
import Image from "next/image";
import { AppointmentType } from "@/utils/type";

const Appointment = ({ data } : {data : AppointmentType}) => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-[80px]">
      <div className="w-[1240px] grid grid-cols-2 items-center gap-5">
        <div className="w-[610px] shrink-0 flex flex-col gap-9">
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
            className="w-full h-[426px] object-contain"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
