import { InvokeFunctionExpr } from '@angular/compiler';
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
  @Input() videoThumbnail:string;
  @Input() src: string;
  
  constructor(private dataService:DataService,private youTubeService:YoutubeService,private _behaviorsubject:BehaviorsubjectService) {
    this.text = '';
    this.text2 = '';
    this.text3 = '';
    this.videoThumbnail='';
    this.src = '';
  }

  
  ngOnInit() {

    
  

  }
  
sendData(){
    this.dataService.sendData(this.videoThumbnail);
    this._behaviorsubject.sendUrl(this.src);
  }


}
