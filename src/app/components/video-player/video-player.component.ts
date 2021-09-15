import { Component, OnInit } from '@angular/core';
import { BehaviorsubjectService } from 'src/app/services/behaviorsubject.service';
import { DataService } from 'src/app/services/data.service';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  
  src: string;

  constructor(private dataService:DataService, private _behavioursubject:BehaviorsubjectService) {
    this.src = "https://www.youtube.com/embed/MrxkwLVYkYQ";
  }

  ngOnInit(): void {
    this._behavioursubject.url$
    .subscribe(
    (urlData)=>{
    this.src=urlData;
console.log(this.src);
    }
    )
    this.dataService.receivedData().subscribe((d)=>{
        this.src = d;
        console.log(this.src);
    })
  }

}
