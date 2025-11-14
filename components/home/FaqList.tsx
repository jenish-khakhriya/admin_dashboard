"use client";

import { FAQItem } from "@/utils/type";
import React, { memo, useRef, useState } from "react";

const FaqList = ({ data }: { data: FAQItem[] }) => {
  const [count, setCount] = useState<number | undefined>(undefined);
  const answerRef = useRef<HTMLDivElement>(null);
  return (
    <div className="w-full flex flex-col gap-[16px]">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full flex lg:gap-32 gap-4 pb-3 border-b border-b-[#E6F0FD]"
          >
            <div className="flex flex-col">
              <div className="lg:text-2xl text-xl font-urbanist-600 text-[#3B3E44]">
                {item?.question}
              </div>
              <div
                ref={answerRef}
                style={{
                  height:
                    count === index
                      ? `${(answerRef.current?.scrollHeight as number) + 20}px`
                      : "0px",
                  paddingTop: count === index ? "20px" : "0px",
                }}
                className="lg:text-lg text-base transition-all overflow-hidden duration-150 font-urbanist-100 text-[#181945] opacity-60 max-md:text-justify"
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

export default memo(FaqList);
