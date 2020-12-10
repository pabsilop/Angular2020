export interface StarWarsResult {
    title: string;
    director: string;
}

export interface StarWarsResponse {
    count: number;
    next?: any;
    previous?: any;
    results: StarWarsResult[];
}