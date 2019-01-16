import { Component, OnInit, Input } from '@angular/core';
import { GetMusixService } from 'src/app/service/get-musix.service';
import { log } from 'util';

@Component({
  selector: 'app-song-lyric-page',
  templateUrl: './song-lyric-page.component.html',
  styleUrls: ['./song-lyric-page.component.scss']
})
export class SongLyricPageComponent implements OnInit {
  private data:any;
  private track_info:any;
  private track_id:any;
  private lyric:string
  private isLoading:boolean=true;
  constructor(private dataService:GetMusixService) {

    

   }

  ngOnInit() {
    this.dataService.currentMessage2.subscribe((message)=>this.track_info=message)
    console.log(this.track_info)
    this.dataService.currentMessage.subscribe((message)=>this.track_id=message)
    this.dataService.getLyrics(this.track_id).subscribe((res)=>{
      this.data = res
       this.lyric = this.data.message.body.lyrics.lyrics_body;
       console.log(this.data);
       this.isLoading=false;
   })
  }

}
