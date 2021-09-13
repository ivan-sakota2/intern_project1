import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BehaviorsubjectService } from './services/behaviorsubject.service';
import { YoutubeService } from './services/youtube.service';
@Component({
  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  items = [];
 
constructor(youTubeService:YoutubeService,private behaviourSubjectServis:BehaviorsubjectService){

  }

ngOnInit(){  
this.behaviourSubjectServis.items
.subscribe((res)=>{

this.items=res;
console.log(this.items);

})





}

}


  



