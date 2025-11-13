import Image from "next/image";
import Heading from "./Heading";
import Listing from "./Listing";
import Button from "./Button";
import rightIcon from "../../public/assets/right.svg";
import { UpcomingAppointmentsType } from "@/utils/type";

const UpcomingAppointments = ({ data } : {data : UpcomingAppointmentsType}) => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-[80px]">
      <div className="w-[1240px] grid grid-cols-2 items-center gap-5">
        <Image
          src={data?.image}
          alt="logo"
          className="w-full h-[426px] object-contain"
          width={500}
          height={300}
        />
        <div className="flex flex-col w-full shrink-0 gap-9">
          <Heading
            title={data?.title}
            description={data?.description}
            className={"!gap-[16px]"}
          />
          <Listing data={data?.arr ?? []} />
          <Button
            className={
              "font-urbanist w-fit text-sm transition-all duration-200 hover:!gap-3 text-white rounded-full px-[14px] bg-[#0666EB] py-[10px]"
            }
            logo={rightIcon}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
