export interface KnownFor {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    original_title: string;
    release_date: string;
    title: string;
    video?: boolean;
}

export interface ActoresResult {
    adult: boolean;
    gender: number;
    id: number;
    known_for: KnownFor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
}

export interface ActoresResponse {
    page: number;
    results: ActoresResult[];
    total_pages: number;
    total_results: number;
}