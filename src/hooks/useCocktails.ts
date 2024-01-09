import { useState } from "react";
import cocktails from "../utils/cocktails.json";
import {
  type Cocktail,
  type ApiResponse,
  type ApiError,
} from "../utils/types";

export function useCocktails({ search }: { search: string }) {
  const [responseCocktails, setResponseCocktails] = useState<ApiResponse>([]);
  const mappedCocktails: Cocktail[] = cocktails?.map((cocktail) => ({
    nombre: cocktail.nombre,
    categoria: cocktail.categoria,
    ingredientes: cocktail.ingredientes,
    preparacion: cocktail.preparacion,
    consejos: cocktail.consejos,
    imagen: cocktail.imagen,
    graduacion_alcoholica: cocktail.graduacion_alcoholica,
    dificultad_preparacion: cocktail.dificultad_preparacion,
    popularidad: cocktail.popularidad,
    pais_origen: cocktail.pais_origen,
    variaciones_recomendadas: cocktail.variaciones_recomendadas,
    historia: cocktail.historia,
  }));

  // ...

  const getCocktails = () => {
    if (search) {
      // Si la búsqueda es exitosa, actualiza el estado con los cocktails encontrados
      const cocktailsSearch = cocktails.filter(cocktail => cocktail.nombre.toLowerCase().includes(search.toLowerCase()));
      setResponseCocktails(cocktailsSearch);
    } else {
      // Si no se encuentra ningún cocktail, actualiza el estado con el error
      const apiErrorResponse: ApiError = {
        Response: "False",
        Error: "Cocktail not found!",
      };
      setResponseCocktails(apiErrorResponse);
    }
  };
  

  return { cocktailsMapped: mappedCocktails, getCocktails };
}
