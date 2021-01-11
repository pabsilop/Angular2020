export interface BibliotecaResult {
  id_BNE: string;
  fecha_de_nacimiento: string;
  nombre_de_persona: string;
  genero: string;
}

export interface BibliotecaResponse {
  count: number;
  next: string;
  previous?: any;
  results: BibliotecaResult[];
}
