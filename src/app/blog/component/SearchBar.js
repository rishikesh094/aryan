"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", query);
  };

  return (
    <div className="flex justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-nowrap items-center bg-white rounded-full shadow-lg px-4 w-2/3 md:w-1/3"
      >
        <input
          type="text"
          name="search"
          placeholder="Search Blog"
          autoComplete="off"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 py-3 px-2 text-gray-700 outline-none bg-transparent"
        />
        <button type="submit" className="p-2">
          <Search size={22} className="text-gray-500" />
        </button>
      </form>
    </div>
  );
}
