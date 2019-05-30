import { Component, OnInit } from '@angular/core';
import { IDiscoverMovie } from 'src/model/discover-movie/discover-movie.interface';
import { DiscoverMovieService } from 'src/services/discover-movie/discover-movie.service';
import { FilteredResponse } from 'src/model/shared/interface';
import { MovieGenreService } from 'src/services/movie-genre/movie-genre.service';
import { MovieGenre } from 'src/model/movie-genre/movie-genre.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  discoverMovies: FilteredResponse<IDiscoverMovie>;
  movieGenres: MovieGenre[];
  page = 1;
  totalPages = 5;
  totalResults = 1;
  isPreviousDisabled = true;
  isNextDisabled = false;
  isLoadingMovies = false;
  isSearching = false;
  hideNextPrev = false;

  constructor(private readonly discoverMovieService: DiscoverMovieService, private readonly movieGenreService: MovieGenreService) { }

  onNextPageClick() {
    if (this.page <= this.totalPages && this.totalPages > 1) {
      this.page++;
      if (this.page == this.totalPages) {
        this.isNextDisabled = true;
      }
      this.isLoadingMovies = true;
      this.getDiscoverMovies(this.page);  
    }
    if (this.page > 1) {
      this.isPreviousDisabled = false;
    }
  }

  onPrevPageClick() {
    if (this.page > 0) {
      this.page--;
      if (this.page == 1) {
        this.isPreviousDisabled = true;
      }
      if (this.page < this.totalPages) {
        this.isNextDisabled = false;
      }
      this.isLoadingMovies = true;
      this.getDiscoverMovies(this.page);
    }
  }

  private getDiscoverMovies(page: number) {
    this.discoverMovieService.getDiscoverMovies(page).subscribe((filteredResponse) => {
      this.isLoadingMovies = false;
      this.discoverMovies = filteredResponse;
      this.movieGenres = this.movieGenreService.MovieGenres.genres;
      this.totalPages = this.discoverMovies.total_pages;
      this.totalResults = this.discoverMovies.total_results;
      if(this.totalPages == 1){
        this.hideNextPrev = true;
      }
    });
  }

  ngOnInit() {
    this.isLoadingMovies = true;    
    this.getDiscoverMovies(this.page);
  }

}
