import { useState, useEffect, useRef } from "react";
import { useSearch } from "../hooks/useSearch";
import { useCocktails } from "../hooks/useCocktails";
const Search = () => {
  

  const { search, updateSearch, error } = useSearch();
  const {cocktailsMapped,getCocktails} = useCocktails({search})

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    getCocktails()
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearch(event.target.value);
  };

  return (
    <section className="h-[3em]">
      <form
        className="flex flex-row items-end content-end relative"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Margarita...."
          type="text"
          className="bg-slate-600 p-3 rounded-xl mr-4 m-auto h-9 w-[15em]"
          value={search}
          onChange={handleChange}
        />
        <button type="button" className="m-auto opacity-20 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search absolute right-6 bottom-2" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg>
        </button>
      </form>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </section>
  );
};
export default Search;
