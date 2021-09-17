import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl='https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=';
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) { }
  private currentVideo = new Subject<any>();
  currentVideo$ = this.currentVideo.asObservable();

  private videoItems = new Subject<any>();
  items = this.videoItems.asObservable();
  search(text: string) {
    let url = `${this.baseUrl}${text}&key=${this.apiKey}`;

    return this.http.get(url).toPromise();
  }
  
  sendUrl(newItem: any) {
    this.currentVideo.next(newItem);
  }

  sendVideoItems(videos: any) {
    this.videoItems.next(videos);
  }
}
