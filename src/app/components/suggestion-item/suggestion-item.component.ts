import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-suggestion-item',
  templateUrl: './suggestion-item.component.html',
  styleUrls: ['./suggestion-item.component.scss'],
})
export class SuggestionItemComponent implements OnInit {
  @Input() text: string='';
  @Input() text2: string='';
  @Input() text3: string='';
  @Input() videoThumbnail: string='';
  @Input() src: string='';
  @Input() videoId: string='';

  constructor(
    private dataService: DataService,
   private _apiService:ApiService
  ) {}

  ngOnInit() {}

  sendData() {
    this.dataService.sendData(this.videoThumbnail);

    let videoForPlay = {
      videoUrl: this.src,
      videoId: this.videoId,
    };

    this._apiService.sendUrl(videoForPlay);
  }
}
