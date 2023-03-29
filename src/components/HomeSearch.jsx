"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex min-w-[70%] md:min-w-[47%] mt-4 md:mt-6 mx-auto max-w-[47%] border border-gray-200 px-3 py-[5px] md:py-[10px] rounded-full hover:shadow-md focus-within:shadow-md transition-shadow "
      >
        <AiOutlineSearch className="text-[18px]  my-auto  p-[1px] text-gray-500 mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none text-[15px] font-normal"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <BsFillMicFill className="text-[18px] my-auto font-medium" />
      </form>

      <div className="flex flex-row   space-x-3 justify-center mt-6 ">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
