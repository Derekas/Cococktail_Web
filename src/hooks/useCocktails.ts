import { useState } from "react";
import cocktails from "../utils/cocktails.json";
import noCocktails from "../utils/noCocktails.json";
import {type Ingrediente,type Cocktail} from '../utils/types'
export function useCocktails(){
    const [responseCocktails, setResponseCocktails] = useState<Cocktail[]>([]);
    const mappedCocktails= cocktails?.map(cocktail=>({
        nombre:cocktail.nombre,
        imagen:cocktail.imagen,
        dificultad:cocktail.dificultad_preparacion,
        historia:cocktail.historia
    }))
    const getCocktails= (search)=>{
        if(search){
            setResponseCocktails(cocktails)
        }else{
            setResponseCocktails(noCocktails)
        }
    }

    return {cocktailsMapped: mappedCocktails,getCocktails}
}