import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  
  private apiKey = "AIzaSyD2olyah0nQFpy75P2Fxg_w2colzdk15Sk";

  constructor(private http: HttpClient) {}

    search(text: string){
      let url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&q='+text+'&key=' + this.apiKey;
      let rezultat = null;
      let response = this.http.get(url).subscribe((data:any)=>{
        rezultat = data;
        
      })
      return rezultat;
    }
   

  }

 

