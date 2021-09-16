import { Component, Input, OnInit } from '@angular/core';
import { BehaviorsubjectService } from 'src/app/services/behaviorsubject.service';
import { YoutubeService } from 'src/app/services/youtube.service';

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
    private _behaviorsubject: BehaviorsubjectService,
    private youtubeService: YoutubeService
  ) {
    this.description = '';
  }

  ngOnInit(): void {
    this._behaviorsubject.items.subscribe((itemsData) => {
      this.items = itemsData;

      this._behaviorsubject.currentVideo$.subscribe((data: any) => {
        this.currentVideoUrl = data.videoUrl;
        this.currentVideoId = data.videoId;

        console.log('Prvi item');
        this.description = this.items.find(
          (i: any) => i.id.videoId === this.currentVideoId
        ).snippet.description;
      });
    });
  }
}
