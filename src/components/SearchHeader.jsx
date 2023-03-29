import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchHeaderOptions from "./SearchHeaderOptions";

export default function SearchHeader() {
  return (
    <header className="sticky  top-0 bg-white">
      <div className="flex w-full  lg:pl-[76px] px-2 py-4  lg:px-6 lg:py-6 items-center justify-between">
        <Link href={"/"}>
        <img
          width="60"
          height="15"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
        />
        </Link>
        <div className="md:flex-1  ">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2 ml-auto ">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-[8px] md:text-sm text-white px-[6px] md:px-6 py-[5px]  md:py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all ">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
}
