"use client"

import { useState, useEffect } from "react";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchHeaderOptions() {
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab) {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm=${searchTerm}`);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex space-x-2 select-none border-b w-full  lg:justify-start pl-[20px] md:pl-[90px] lg:pl-[80px] text-gray-700 text-sm ${
        isHidden ? "hidden" : "block"
      }`}
    >
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-2 px-0 ${
          pathname === "/search/web" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${
          pathname === "/search/image" && "!text-blue-600 !border-blue-600"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}
