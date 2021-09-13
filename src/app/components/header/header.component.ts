import { OnInit, Output, EventEmitter } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { BehaviorsubjectService } from 'src/app/services/behaviorsubject.service';
import { YoutubeService } from 'src/app/services/youtube.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  text!: string;

  public constructor(protected api:YoutubeService,protected behaviourSubjectServis:BehaviorsubjectService) {}
     
  ngOnInit(): void {}

  onLupaClick(){
   var apiResponse = this.api.search(this.text);
   this.behaviourSubjectServis.sendVideoItems(apiResponse);
  }
onSubmit(){

if(!this.text){

  alert('Please add a text!');
  return;

}
console.log(this.text);
const newText = {
text: this.text


}


this.text = '';

}
  
   
}