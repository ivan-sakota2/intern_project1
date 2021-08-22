import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

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
  
  constructor() {
    this.text = '';
    this.src = '';
    this.text2 = '';
    this.text3 = '';
    this.duration = '';
  }

  ngOnInit(): void {}
}
