import { Injectable } from "@angular/core";
import { MovieDbApiRoutes } from "../moviedb-api-routes/moviedb-api-routes";
import { Observable } from "rxjs";
import { FilteredResponse } from "src/model/shared/interface";
import { IDiscoverMovie } from "src/model/discover-movie/discover-movie.interface";
import { HttpClient } from "@angular/common/http";
import { MovieGenres } from "src/model/movie-genre/movie-genre.interface";

@Injectable()
export class MovieGenreService {

    private _movieGenres: MovieGenres;

    get MovieGenres() {
        return this._movieGenres;
    }
    set MovieGenres(value: MovieGenres) {
        this._movieGenres = value;
    }

    constructor(private readonly httpClient: HttpClient, private readonly movieDbApiRoutes: MovieDbApiRoutes) { }

    public getMovieGenres(): void {
        this.httpClient.get<MovieGenres>(this.movieDbApiRoutes.getMovieGenresUrl).subscribe((result) => {
            this._movieGenres = result;
        });
    }
}