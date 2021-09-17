import { OnInit,  } from '@angular/core';
import { Component,  } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  text!: string;

  public constructor(protected api:ApiService,protected _apiService:ApiService) {}
     
  ngOnInit(): void {}

  async onLupaClick(){
   var apiResponse : any = await this.api.search(this.text);
   this._apiService.sendVideoItems(apiResponse.items);
  }
onSubmit(){

if(!this.text){

  alert('Please add a text!');
  return;

}

const newText = {
text: this.text


}


this.text = '';

}
  
   
}