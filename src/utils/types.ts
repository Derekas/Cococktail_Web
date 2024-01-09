export type Ingrediente = {
  nombre: string;
  cantidad: string;
  tipo?: string;
  fresco?: boolean;
};

export type Cocktail = {
  nombre: string;
  categoria: string;
  ingredientes: Ingrediente[];
  preparacion: string;
  imagen: string;
  historia: string;
  consejos: string[];
  graduacion_alcoholica: string;
  dificultad_preparacion: string;
  popularidad: string;
  pais_origen: string;
  variaciones_recomendadas: string[];
};

type ApiError = {
  Response: "False";
  Error: string;
};

type ApiResponse = Cocktail[] | ApiError;
