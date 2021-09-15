import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorsubjectService } from './services/behaviorsubject.service';
import { YoutubeService } from './services/youtube.service';
import{DomSanitizer} from '@angular/platform-browser'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shouldShowItems = false;
  items: any = [];

  constructor(
    youTubeService: YoutubeService,
    private behaviourSubjectServis: BehaviorsubjectService,
    private _sanitizer:DomSanitizer
    
  ) {}

  ngOnInit() {
    this.behaviourSubjectServis.items.subscribe((res) => {
      this.items = res;
      for(let i=0;i<this.items;i++){

        this.items[i].id.videoId = this._sanitizer.bypassSecurityTrustResourceUrl(this.items[i].id.videoId);

        
      }
       this.shouldShowItems = true;
    });
  }
}
