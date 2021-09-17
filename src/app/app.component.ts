import { Component, OnInit } from '@angular/core';
import{DomSanitizer} from '@angular/platform-browser'
import { ApiService } from './services/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  shouldShowItems = false;
  shouldShow=true;
  items: any = [];

  constructor(
    private _apiService:ApiService,
    private _sanitizer:DomSanitizer
    
  ) {}

  ngOnInit() {
    this._apiService.items.subscribe((res) => {
      this.items = res;
      for(let i=0;i<this.items;i++){

        this.items[i].id.videoId = this._sanitizer.bypassSecurityTrustResourceUrl(this.items[i].id.videoId);

        
      }
      if(this.items.length>0){
       this.shouldShowItems =true;
       this.shouldShow=false;
      }else{
       this.shouldShow=true;
      }
    });
  }
}
