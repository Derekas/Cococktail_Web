export type Ingrediente = {
  nombre: string;
  cantidad: string;
  tipo?: string;
  fresco?: boolean;
};

export type Cocktail = {
  nombre: string;
  categoria: string;
  ingredientes: {
    nombre: string;
    cantidad: string;
    tipo?: string;
    fresco?: boolean;
  }[];
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

export type ApiError = {
  Response: "False";
  Error: string;
};

export type ApiResponse = Cocktail[] | ApiError;
