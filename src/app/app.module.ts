import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SuggestionItemComponent } from './components/suggestion-item/suggestion-item.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SafePipe } from './safe.pipe';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuggestionItemComponent,
    VideoPlayerComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
