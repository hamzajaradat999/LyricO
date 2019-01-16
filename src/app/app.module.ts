import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MzButtonModule,
  MzModalModule ,
         MzInputModule,
         MzDropdownModule,
         MzSidenavModule,
         MzNavbarModule,
         MzCardModule,
         MzParallaxModule,
         MzTabModule,MzValidationModule,MzSelectModule,
         MzSpinnerModule    } from 'ngx-materialize';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SongPageComponent } from './components/song-page/song-page.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { SongLyricPageComponent } from './components/song-lyric-page/song-lyric-page.component';

import { HttpClientModule } from '@angular/common/http';
import { GetMusixService } from './service/get-musix.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SongPageComponent,
    SongCardComponent,
    SongLyricPageComponent,
  ], 

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzSidenavModule,
    HttpClientModule,
    MzNavbarModule,
    MzCardModule,
    MzDropdownModule,
    MzParallaxModule,
    MzTabModule,
    MzValidationModule,
    MzSelectModule ,
    MzModalModule,
    MzSpinnerModule 
  ],
  providers: [GetMusixService],
  bootstrap: [AppComponent]
})
export class AppModule { }
