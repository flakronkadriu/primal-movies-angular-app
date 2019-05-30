import { MovieGenre } from "../movie-genre/movie-genre.interface";

export interface IMovieDetail {
    adult: boolean;
    budget: number;
    genres: MovieGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: string;
    poster_path: string;
    release_date: string;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}