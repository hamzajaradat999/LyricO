import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SongPageComponent } from './components/song-page/song-page.component';
import { SongLyricPageComponent } from './components/song-lyric-page/song-lyric-page.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"songPage",component:SongPageComponent},
  {path:"songLyricPage",component:SongLyricPageComponent},
  {path:"songLyricPage",component:SongLyricPageComponent}, 


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
