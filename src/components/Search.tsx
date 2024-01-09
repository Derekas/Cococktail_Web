import { useState, useEffect, useRef } from "react";

const Search = () => {
  function useSearch() {
    const [search, updateSearch] = useState("");
    const [error, setError] = useState("");
    const isFirstInput = useRef(true);

    useEffect(() => {
      if (isFirstInput.current) {
        isFirstInput.current = false;
        return;
      }

      if (search === "") {
        setError("No se puede buscar un cocktail vacío");
        return;
      }

      if (search.match(/^\d+$/)) {
        setError("No se puede buscar un cocktail con un número");
        return;
      }

      if (search.length < 3) {
        setError("La búsqueda debe tener al menos 3 caracteres");
        return;
      }

      setError("");
    }, [search]);

    return { search, updateSearch, error };
  }

  const { search, updateSearch, error } = useSearch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ search });
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
