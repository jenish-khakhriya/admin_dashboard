import Image from "next/image";
import logo from "../../public/assets/whitePocket.svg";

import facebook from "../../public/assets/facebook.svg";
import x from "../../public/assets/x.svg";
import insta from "../../public/assets/insta.svg";
import youtube from "../../public/assets/youtube.svg";
import Link from "next/link";

const data = [insta, x, facebook, youtube];

const linkData = ["Home", "Services", "Pricing", "About us", "Contact"];

const legalData = ["Terms of Use", "Privacy Policy"];
const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center pt-[100px] bg-[#032B63]">
      <div className="w-[1400px] grid grid-cols-4 gap-5 items-top min-h-[262px]">
        <div className="flex flex-col gap-9">
          <div className="w-2/3 flex flex-col gap-6">
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

        <div className="flex flex-col gap-6">
          <h2 className="text-[22px] font-urbanist-600 text-white">Jump To</h2>
          <div className="flex flex-col gap-3">
            {linkData?.map((item, index) => {
              return (
                <Link key={index} href={"/"} className="text-white font-urbanist text-base">
                  {item}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-[22px] font-urbanist-600 text-white">Legal</h2>
          <div className="flex flex-col gap-3">
            {legalData?.map((item, index) => {
              return (
                <Link key={index} href={"/"} className="text-white font-urbanist text-base">
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
