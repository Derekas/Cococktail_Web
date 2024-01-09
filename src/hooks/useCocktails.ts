import { useState } from "react";
import cocktails from "../utils/cocktails.json";
import noCocktails from "../utils/noCocktails.json";
import {
  type Ingrediente,
  type Cocktail,
  type ApiResponse,
  type ApiError,
} from "../utils/types";
export function useCocktails() {
  const [responseCocktails, setResponseCocktails] = useState<ApiResponse>([]);
  const mappedCocktails = cocktails?.map((cocktail) => ({
    nombre: cocktail.nombre,
    imagen: cocktail.imagen,
    dificultad: cocktail.dificultad_preparacion,
    historia: cocktail.historia,
  }));
  const getCocktails = (search) => {
    if (search) {
      const apiSuccessResponse: Cocktail[] = cocktails;
      setResponseCocktails(apiSuccessResponse);
    } else {
      const apiErrorResponse: ApiError = {
        Response: "False",
        Error: "Movie not found!",
      };
      setResponseCocktails(apiErrorResponse);
    }
  };

  return { cocktailsMapped: mappedCocktails, getCocktails };
}
