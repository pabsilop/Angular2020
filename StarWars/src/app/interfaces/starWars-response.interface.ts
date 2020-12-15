export interface StarWarsResult {
    title: string;
    director: string;
    episode_id: number;
}

export interface StarWarsResponse {
    count: number;
    next?: any;
    previous?: any;
    results: StarWarsResult[];
}
