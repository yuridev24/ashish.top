import { useState } from "react";
import { connectSearchBox } from "react-instantsearch-dom";

function SearchBox({ refine }: any) {
  const [search, setSearch] = useState("");
  const handleInput = (e: any) => {
    refine(e.target.value);
    setSearch(e.target.value);
  }
  return (
    <form role="search" className="flex flex-row justify-center" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Start typing to search..."
        onChange={handleInput}
        value={search}
        className="bg-transparent w-full text-center text-lg mb-2 mt-16"
      />
    </form>
  );
}

export default connectSearchBox(SearchBox);
