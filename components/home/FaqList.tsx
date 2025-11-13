"use client";

import { FAQItem } from "@/utils/type";
import React, { useState } from "react";

const FaqList = ({ data } : {data : FAQItem[]}) => {
  const [count, setCount] = useState<number | undefined>(undefined);

  return (
    <div className="w-full flex flex-col gap-[16px]">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex gap-32 pb-3 border-b border-b-[#E6F0FD]"
          >
            <div className="flex flex-col">
              <div className="text-2xl font-urbanist-600 text-[#3B3E44]">
                {item?.question}
              </div>
              <div
                style={{
                  height: count === index ? "100px" : "0px",
                  paddingTop: count === index ? "20px" : "0px",
                }}
                className="text-lg transition-all overflow-hidden duration-150 font-urbanist-100 text-[#181945] opacity-60"
              >
                {item?.answer}
              </div>
            </div>
            <button
              onClick={() => {
                setCount(
                  typeof count === "undefined" || count !== index
                    ? index
                    : undefined
                );
              }}
              className="w-6 h-6 shrink-0 bg-[#0666EB] rounded-full flex justify-center items-center text-white"
            >
              <div className="w-3 h-3 font-urbanist-600 flex justify-center items-center">
                {count === index ? "-" : "+"}
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FaqList;
