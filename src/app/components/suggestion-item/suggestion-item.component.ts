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
  @Input() src: string;
  @Input() text2: string;
  @Input() text3: string;
  @Input() duration:string;
  @Input() videoUrl:string;

  
  constructor(private dataService:DataService,private youTubeService:YoutubeService,private _behaviorsubject:BehaviorsubjectService) {
    this.text = '';
    this.src = '';
    this.text2 = '';
    this.text3 = '';
    this.duration = '';
    this.videoUrl='';
  }

  
  ngOnInit() {

    
  

  }
  
sendData(){
    this.dataService.sendData(this.src);
    this._behaviorsubject.sendUrl(this.src);
  }


}
