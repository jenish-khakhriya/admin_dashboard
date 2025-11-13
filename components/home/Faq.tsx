import React from "react";
import FaqList from "./FaqList";
import { FAQDataType } from "@/utils/type";

const Faq = ({ data } : {data : FAQDataType}) => {
  const { title, data: faqData } = data;
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center py-[100px]">
      <div className="w-[1240px] flex flex-col items-center gap-[60px]">
        <h1 className="text-5xl w-full font-urbanist-600 text-[#181945] leading-[55px]">
          {title}
        </h1>
        <FaqList data={faqData} />
      </div>
    </div>
  );
};

export default Faq;
