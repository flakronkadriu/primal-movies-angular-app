import { Injectable } from "@angular/core";

@Injectable()
export class MovieDbApiRoutes {
    private readonly discover = "discover";
    private readonly movie: string = "movie";
    private readonly genre: string = "genre";
    private readonly list: string = "list";
    private readonly search: string = "search";

    public get getDiscoverMovieUrl() {
        return `${this.movieDbBaseUrl}/${this.discover}/${this.movie}`
    }

    public get getMovieGenresUrl() {
        return `${this.movieDbBaseUrl}/${this.genre}/${this.movie}/${this.list}`;
    }

    public getMovieDetailsUrl(movieId: number) {
        return `${this.movieDbBaseUrl}/${this.movie}/${movieId}`;
    }

    public get getSearchMovieUrl(){
        return `${this.movieDbBaseUrl}/${this.search}/${this.movie}`;
    }

    private get movieDbBaseUrl() {
        return "https://api.themoviedb.org/3";
    }
}