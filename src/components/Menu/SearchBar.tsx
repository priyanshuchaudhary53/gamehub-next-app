"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const searchGames = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchInput.current?.value;
    if (query?.length === 0) {
      return;
    }
    console.log(query);
    router.push(`/search?q=${query}`);
  };

  return (
    <div className="relative">
      <form onSubmit={searchGames}>
        <input
          ref={searchInput}
          type="text"
          name="q"
          placeholder="Search 800,000+ games"
          className="w-full md:w-[300px] text-primary py-3 pl-6 pr-14 rounded-full font-semibold outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:ring-2 focus:ring-gray-600 placeholder:font-medium"
        />
        <button
          type="submit"
          className="absolute top-1/2 right-2 cursor-pointer -translate-y-1/2 bg-primary hover:bg-gray-700 duration-200 text-lg text-white rounded-full p-2"
        >
          <IoSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
