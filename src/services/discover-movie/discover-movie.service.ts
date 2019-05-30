import { Injectable, EventEmitter } from "@angular/core";
import { MovieDbApiRoutes } from "../moviedb-api-routes/moviedb-api-routes";
import { Observable } from "rxjs";
import { FilteredResponse } from "src/model/shared/interface";
import { IDiscoverMovie } from "src/model/discover-movie/discover-movie.interface";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class DiscoverMovieService {    

    constructor(private readonly httpClient: HttpClient, private readonly movieDbApiRoutes: MovieDbApiRoutes) { }

    public getDiscoverMovies(page: number): Observable<FilteredResponse<IDiscoverMovie>> {
        let params = new HttpParams()
            .set('sort_by', 'popularity.desc')
            .set('page', page.toString())
            .set('include_adult', 'false')
            .set('include_video', 'false');

        return this.httpClient.get<FilteredResponse<IDiscoverMovie>>(this.movieDbApiRoutes.getDiscoverMovieUrl, { params: params });
    }

    public searchMovie(searchText: string, page: number): Observable<FilteredResponse<IDiscoverMovie>> {
        let params = new HttpParams()            
            .set('page', page.toString())
            .set("query", searchText);

        return this.httpClient.get<FilteredResponse<IDiscoverMovie>>(this.movieDbApiRoutes.getSearchMovieUrl, { params: params });
    }
}