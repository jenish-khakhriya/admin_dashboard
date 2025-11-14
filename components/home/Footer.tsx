import Image from "next/image";
import logo from "../../public/assets/whitePocket.svg";

import facebook from "../../public/assets/facebook.svg";
import x from "../../public/assets/x.svg";
import insta from "../../public/assets/insta.svg";
import youtube from "../../public/assets/youtube.svg";
import phone from "../../public/assets/phone-call.svg";
import pin from "../../public/assets/map-pin.svg";
import Link from "next/link";
import appleIcon from "../../public/assets/appleIcon.svg";
import googleIcon from "../../public/assets/googleIcon.svg";
import { memo } from "react";

const data = [insta, x, facebook, youtube];

const linkData = ["Home", "Services", "Pricing", "About us", "Contact"];

const legalData = ["Terms of Use", "Privacy Policy"];

const contact = [
  {
    name: "1234, South Avenue",
    icon: pin,
  },
  {
    name: "+01234 567 890",
    icon: phone,
  },
];
const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center lg:pt-[100px] py-8 xl:px-0 md:px-5 px-3 bg-[#032B63]">
      <div className="2xl:w-[1400px] xl:w-[1240px] w-full grid xl:grid-cols-4 grid-cols-2 gap-5 items-top min-h-[262px]">
        <div className="flex flex-col lg:gap-9 gap-4">
          <div className="w-2/3 flex flex-col lg:gap-6 gap-4">
            <Image
              src={logo} // path relative to public/
              alt="logo"
              className="w-[125px] object-contain"
              width={500}
              height={300}
            />
            <p className="text-[16px] font-urbanist text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="flex gap-5">
              {data?.map((item, index) => {
                return (
                  <Image
                  key={index}
                    src={item}
                    alt="logo"
                    className="w-6 h-6 object-contain"
                    width={500}
                    height={300}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:gap-6 gap-3">
          <h2 className="text-[22px] font-urbanist-600 text-white">Jump To</h2>
          <div className="flex flex-col lg:gap-3 gap-2">
            {linkData?.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={"/"}
                  className="text-white font-urbanist text-base"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:gap-6 gap-3">
          <h2 className="text-[22px] font-urbanist-600 text-white">Legal</h2>
          <div className="flex flex-col lg:gap-3 gap-2">
            {legalData?.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={"/"}
                  className="text-white font-urbanist text-base"
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col lg:gap-6 gap-3">
          <h2 className="text-[22px] font-urbanist-600 text-white">Contact Us</h2>
          <div className="flex flex-col lg:gap-3 gap-2">
            {contact?.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={"/"}
                  className="text-white font-urbanist text-base flex gap-2"
                >
                  <Image
                    src={item?.icon}
                    alt="logo"
                    className="w-5 h-5 object-contain"
                    width={500}
                    height={300}
                  />
                  {item?.name}
                </Link>
              );
            })}
            <div className="flex flex-col gap-1">
              <p className="text-white text-base font-urbanist">
                Download Our App Now!
              </p>
              <div className="flex lg:flex-row flex-col gap-2">
                <Image
                  src={googleIcon}
                  alt="logo"
                  className="lg:w-[122px] w-24 object-contain cursor-pointer"
                  width={500}
                  height={300}
                />
                <Image
                  src={appleIcon}
                  alt="logo"
                  className="md:w-[122px] w-24 object-contain cursor-pointer"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
