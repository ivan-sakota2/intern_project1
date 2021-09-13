import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorsubjectService {
  
  private videoUrl = new Subject<string>();
  url$ = this.videoUrl.asObservable();
  private videoItems = new Subject<any>();
  items = this.videoItems.asObservable();
  constructor() { }
sendUrl(url: string){

this.videoUrl.next(url);

}

sendVideoItems(videos: any){

  this.videoItems.next(videos);
}

  
}
