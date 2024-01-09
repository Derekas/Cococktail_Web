import { useEffect, useRef, useState } from "react";

export function useSearch() {
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