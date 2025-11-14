import React, { memo } from "react";
import FaqList from "./FaqList";
import { FAQDataType } from "@/utils/type";

const Faq = ({ data } : {data : FAQDataType}) => {
  const { title, data: faqData } = data;
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center xl:py-[100px] md:py-6 py-4 xl:px-0 md:px-5 px-3">
      <div className="xl:w-[1240px] w-full flex flex-col items-center lg:gap-[60px] gap-5">
        
        <h1 className="xl:text-5xl lg:text-4xl text-3xl w-full font-urbanist-600 text-[#181945] xl:leading-[55px]">
          {title}
        </h1>
        <FaqList data={faqData} />
      </div>
    </div>
  );
};

export default memo(Faq);
