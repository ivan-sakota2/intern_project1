import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
  src: string;

  constructor(
    private dataService: DataService,
    private _apiService: ApiService
  ) {
    this.src = 'https://www.youtube.com/embed/MrxkwLVYkYQ';
  }

  ngOnInit(): void {
    this._apiService.currentVideo$.subscribe((urlData) => {
      this.src = urlData.videoUrl;
      
    });
    this.dataService.receivedData().subscribe((d) => {
      this.src = d;
     
    });
  }
}
