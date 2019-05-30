import { Component, OnInit } from '@angular/core';
import { DiscoverMovieService } from 'src/services/discover-movie/discover-movie.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  public searchInput: string;

  constructor(private readonly router: Router) {     
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        if(val.url === "/home"){
          this.searchInput = "";
        }
      }
    })
  }

  public onSearchClick() {
    this.router.navigate(['/search'], { queryParams: { q: this.searchInput } });
  }

  ngOnInit() {
  }

}
