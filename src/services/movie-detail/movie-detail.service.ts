import { Injectable } from "@angular/core";
import { MovieDbApiRoutes } from "../moviedb-api-routes/moviedb-api-routes";
import { Observable } from "rxjs";
import { FilteredResponse } from "src/model/shared/interface";
import { IDiscoverMovie } from "src/model/discover-movie/discover-movie.interface";
import { HttpClient, HttpParams } from "@angular/common/http";
import { IMovieDetail } from "src/model/movie-detail/movie-detail.interface";

@Injectable()
export class MovieDetailService {

    constructor(private readonly httpClient: HttpClient, private readonly movieDbApiRoutes: MovieDbApiRoutes) { }

    public getMovieDetails(movieId: number): Observable<IMovieDetail> {
        return this.httpClient.get<IMovieDetail>(this.movieDbApiRoutes.getMovieDetailsUrl(movieId));
    }
}