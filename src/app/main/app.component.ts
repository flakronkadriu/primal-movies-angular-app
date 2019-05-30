import { Component, OnInit } from '@angular/core';
import { MovieGenreService } from 'src/services/movie-genre/movie-genre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private readonly movieGenreService: MovieGenreService) { }

  ngOnInit() {
    this.movieGenreService.getMovieGenres();
  }
}
