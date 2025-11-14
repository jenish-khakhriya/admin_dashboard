import Image from "next/image";
import Heading from "./Heading";
import Listing from "./Listing";
import Button from "./Button";
import rightIcon from "../../public/assets/right.svg";
import { UpcomingAppointmentsType } from "@/utils/type";
import { memo } from "react";

const UpcomingAppointments = ({ data }: { data: UpcomingAppointmentsType }) => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center xl:py-[80px] md:py-6 py-4 xl:px-0 md:px-5 px-2">
      <div className="xl:w-[1240px] w-full grid lg:grid-cols-2 grid-cols-1 items-center md:gap-5 gap-3">
        <Image
          src={data?.image}
          alt="logo"
          className="w-full lg:h-[426px] object-contain"
          width={500}
          height={300}
        />
        <div className="flex flex-col w-full shrink-0 md:gap-9 gap-4">
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

export default memo(UpcomingAppointments);
