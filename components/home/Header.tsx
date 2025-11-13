"use client";

import Image from "next/image";
import logo from "../../public/assets/userIcon.svg";
import userIcon from "../../public/assets/logo.svg";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constant/route";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const { push } = useRouter();
  return (
    <header className="w-full flex justify-center items-center bg-[#E6F0FD]">
      <div className="w-[1240px] grid grid-cols-3 items-center py-4 gap-6">
        <Image
          src={logo} // path relative to public/
          alt="logo"
          className="w-[108px] object-contain"
          width={500}
          height={300}
        />

        <nav className="nav flex justify-center items-center w-full">
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
        <div className="flex gap-3 items-center place-self-end">
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
      </div>
    </header>
  );
};

export default Header;
