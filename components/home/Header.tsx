"use client";

import Image from "next/image";
import logo from "../../public/assets/userIcon.svg";
import userIcon from "../../public/assets/logo.svg";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constant/route";
import { memo, useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { push } = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <header className="w-full flex justify-center relative items-center bg-[#E6F0FD] max-md:border-b max-md:border-b-black/25 z-">
      <div className="xl:w-[1240px] w-full xl:p-0 md:px-5 px-3 grid md:grid-cols-3 grid-cols-2 items-center py-4 gap-6">
        <Image
          src={logo} 
          alt="logo"
          className="md:w-[108px] w-[80px] object-contain"
          width={500}
          height={300}
        />

        <nav className="nav md:flex hidden justify-center items-center w-full">
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link className="font-urbanist-200" href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:flex hidden gap-3 items-center place-self-end">
          <Button
            onClick={() => {
              push(ROUTES.LOGIN);
            }}
            className={"font-urbanist-600 text-sm text-[#0666EB] px-4"}
          >
            Log In
          </Button>
          <Button
            onClick={() => {
              push(ROUTES.REGISTER);
            }}
            className={
              "font-urbanist text-sm text-white rounded-full px-[14px] bg-[#0666EB] py-[10px]"
            }
            logo={userIcon}
          >
            Sign Up
          </Button>
        </div>

        <button
          onClick={() => {
            setIsOpenMenu((prev) => !prev);
          }}
          className="md:hidden h-full cursor-pointer flex items-center place-self-end"
        >
          {!isOpenMenu && (
            <div className="flex flex-col h-full justify-center gap-2">
              <div className="block w-8 h-1 bg-black rounded"></div>
              <div className="block w-8 h-1 bg-black rounded"></div>
              <div className="block w-8 h-1 bg-black rounded"></div>
            </div>
          )}

          {isOpenMenu && (
            <div className="relative w-8 h-8">
              <span className="absolute top-1/2 left-0 w-8 h-1 bg-black rotate-45 rounded origin-center"></span>
              <span className="absolute top-1/2 left-0 w-8 h-1 bg-black -rotate-45 rounded origin-center"></span>
            </div>
          )}
        </button>
      </div>

      <div
        style={{
          height: isOpenMenu ? "368px" : "0px",
        }}
        className="overflow-auto transition-all duration-200 flex md:hidden flex-col absolute left-0 w-full top-[69px] bg-[#F8E6DE] z-50"
      >
        <nav className="justify-center items-center w-full">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li
                className="bg-[#F8E6DE] px-2 py-3 border border-white cursor-pointer"
                key={link.name}
              >
                <Link
                  className="font-urbanist-200 font-urbanist-600 text-lg"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <Button
              onClick={() => {
                push(ROUTES.LOGIN);
              }}
              className={"font-urbanist-600 py-3 border border-white text-sm text-[#0666EB] px-2"}
            >
              Log In
            </Button>
            <Button
              onClick={() => {
                push(ROUTES.REGISTER);
              }}
              className={
                "font-urbanist border border-white text-sm text-white px-2 bg-[#0666EB] py-3"
              }
              logo={userIcon}
            >
              Sign Up
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default memo(Header);
