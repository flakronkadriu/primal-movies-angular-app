import { Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { SearchMovieComponent } from "./search-movie/search-movie.component";

export const AppRoutes: Routes = [
    {
        path: 'home',
        children: [
            { path: 'movies', component: MoviesListComponent },            
            { path: "movies/:id", component: MovieDetailComponent },
            { path: '', redirectTo: 'movies', pathMatch: 'full' }
        ],
        component: HomePageComponent
    },
    { path: 'search', component: SearchMovieComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];