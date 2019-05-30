import { Component, OnInit } from '@angular/core';
import { FilteredResponse } from 'src/model/shared/interface';
import { IDiscoverMovie } from 'src/model/discover-movie/discover-movie.interface';
import { MovieGenre } from 'src/model/movie-genre/movie-genre.interface';
import { DiscoverMovieService } from 'src/services/discover-movie/discover-movie.service';
import { MovieGenreService } from 'src/services/movie-genre/movie-genre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  discoverMovies: FilteredResponse<IDiscoverMovie>;
  movieGenres: MovieGenre[];
  page = 1;
  totalPages = 5;
  totalResults = 1;
  isPreviousDisabled = true;
  isNextDisabled = false;
  isLoadingMovies = false;
  searchText = "";
  hideNextPrev = false;

  constructor(private readonly discoverMovieService: DiscoverMovieService, private readonly movieGenreService: MovieGenreService,
    private activatedRoute: ActivatedRoute) { }

  onNextPageClick() {
    if (this.page <= this.totalPages && this.totalPages > 1) {
      this.page++;
      if (this.page == this.totalPages) {
        this.isNextDisabled = true;
      }
      this.isLoadingMovies = true;
      this.searchMovie(this.searchText, this.page);
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
      this.searchMovie(this.searchText, this.page);
    }
  }

  private searchMovie(searchText: string, page: number) {
    this.isLoadingMovies = true;
    this.discoverMovieService.searchMovie(searchText, page).subscribe((result) => {
      this.isLoadingMovies = false;
      this.discoverMovies = result;
      this.totalPages = this.discoverMovies.total_pages;
      this.totalResults = this.discoverMovies.total_results;
      if (this.totalPages == 1) {
        this.hideNextPrev = true;
      }
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.isLoadingMovies = true;
      this.searchText = param.q;
      this.searchMovie(this.searchText,this.page);
    });
  }

}
