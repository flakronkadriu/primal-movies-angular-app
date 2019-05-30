import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class YoutubeService {

    private readonly youtubeSearchEndpoint = `https://www.googleapis.com/youtube/v3/search?key=${environment.youtubeApiKey}&maxResults=10&part=snippet`;

    constructor(private readonly httpClient: HttpClient) { }

    public getYoutubeVideoId(searchText: string): Promise<JSON> {
        var youtubeSearchVideoUrl = `${this.youtubeSearchEndpoint}&q=${searchText} official trailer`;

        return this.httpClient.get<JSON>(youtubeSearchVideoUrl).toPromise();
    }
}