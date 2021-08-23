import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SuggestionItemComponent } from './components/suggestion-item/suggestion-item.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuggestionItemComponent,
    VideoPlayerComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
