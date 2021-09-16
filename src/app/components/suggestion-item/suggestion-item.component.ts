import { InvokeFunctionExpr } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BehaviorsubjectService } from 'src/app/services/behaviorsubject.service';
import { DataService } from 'src/app/services/data.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-suggestion-item',
  templateUrl: './suggestion-item.component.html',
  styleUrls: ['./suggestion-item.component.scss'],
})
export class SuggestionItemComponent implements OnInit {
  @Input() text: string;
  @Input() text2: string;
  @Input() text3: string;
  @Input() videoThumbnail: string;
  @Input() src: string;
  @Input() videoId: string;

  constructor(
    private dataService: DataService,
    private youTubeService: YoutubeService,
    private _behaviorsubject: BehaviorsubjectService
  ) {
    this.text = '';
    this.text2 = '';
    this.text3 = '';
    this.videoThumbnail = '';
    this.src = '';
    this.videoId = '';
  }

  ngOnInit() {}

  sendData() {
    this.dataService.sendData(this.videoThumbnail);

    let videoForPlay = {
      videoUrl: this.src,
      videoId: this.videoId,
    };

    this._behaviorsubject.sendUrl(videoForPlay);
  }
}
