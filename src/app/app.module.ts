import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApiKeyInterceptor } from '../services/configs/http-interceptor.service';
import { FormsModule } from '@angular/forms';
import { DiscoverMovieService } from '../services/discover-movie/discover-movie.service';
import { MovieDbApiRoutes } from '../services/moviedb-api-routes/moviedb-api-routes';
import { MovieGenreService } from '../services/movie-genre/movie-genre.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailService } from '../services/movie-detail/movie-detail.service';
import { YoutubeService } from 'src/services/youtube/youtube.service';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavMenuComponent,
    MoviesListComponent,
    MovieDetailComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DiscoverMovieService,
    MovieDbApiRoutes,
    MovieGenreService,
    MovieDetailService,
    YoutubeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
