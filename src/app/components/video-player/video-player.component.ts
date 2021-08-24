import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  
  src: string;

  constructor(private dataService:DataService) {
    this.src = "https://www.youtube.com/embed/MrxkwLVYkYQ";
  }

  ngOnInit(): void {
    this.dataService.receivedData().subscribe((d)=>{
        this.src = d;
    })
  }

}
