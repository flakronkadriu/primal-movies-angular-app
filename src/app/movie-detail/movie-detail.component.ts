import { Component, OnInit } from '@angular/core';
import { MovieDetailService } from 'src/services/movie-detail/movie-detail.service';
import { ActivatedRoute } from '@angular/router';
import { IMovieDetail } from 'src/model/movie-detail/movie-detail.interface';
import { YoutubeService } from 'src/services/youtube/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  public movieDetail: IMovieDetail;
  public isLoadingMovie = true;
  private movieId: number;
  public videoUrl: any;

  constructor(private readonly movieDetailService: MovieDetailService, private readonly activatedRoute: ActivatedRoute,
    private readonly youtubeService: YoutubeService, private _domSanitizer: DomSanitizer) { }

  private getMovieDetails(){
    this.movieDetailService.getMovieDetails(this.movieId).subscribe((response) => {
      this.movieDetail = response;
      this.getYoutubeVideoId();
    });
  }

  private getYoutubeVideoId(){
    this.youtubeService.getYoutubeVideoId(this.movieDetail.title).then((result) => {
      var jsonResult: any = result;
      var youtubeVideo = `https://www.youtube.com/embed/${jsonResult.items[0].id.videoId}?&autoplay=1`
      this.videoUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(youtubeVideo);
      this.isLoadingMovie = false;
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.movieId = +params['id'];
      this.getMovieDetails();
    });
  }

}
