import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorsubjectService {
  private currentVideo = new Subject<any>();
  currentVideo$ = this.currentVideo.asObservable();

  private videoItems = new Subject<any>();
  items = this.videoItems.asObservable();
  constructor() {}
  sendUrl(newItem: any) {
    this.currentVideo.next(newItem);
  }

  sendVideoItems(videos: any) {
    this.videoItems.next(videos);
  }
}
