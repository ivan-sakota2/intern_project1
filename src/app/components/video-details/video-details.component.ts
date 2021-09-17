import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  @Input() description: string;
  currentVideoUrl = '';
  currentVideoId = '';
  items: any = [];
  constructor(
    private _apiService:ApiService
  ) {
    this.description = '';
  }

  ngOnInit(): void {
    this._apiService.items.subscribe((itemsData) => {
      this.items = itemsData;

      this._apiService.currentVideo$.subscribe((data: any) => {
        this.currentVideoUrl = data.videoUrl;
        this.currentVideoId = data.videoId;

        
        this.description = this.items.find(
          (i: any) => i.id.videoId === this.currentVideoId
        ).snippet.description;
      });
    });
  }
}
