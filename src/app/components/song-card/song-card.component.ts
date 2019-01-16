import { Component, OnInit, Input } from '@angular/core';
import { GetMusixService } from 'src/app/service/get-musix.service';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss']
})
export class SongCardComponent implements OnInit {
@Input() tracks:any;
@Input() track:any;
@Input() rank:number;
private allowRank:boolean;


  constructor(private dataService:GetMusixService) { }

  ngOnInit() {
    
    if(isNaN(this.rank))
    this.allowRank=false;
    else
     this.allowRank=true;
   
  }

  getData(){

    
  }

  getLyrics(){

    this.dataService.changeMessage(this.tracks.track.track_id)
    this.dataService.changeMessage2(this.tracks.track)
    
  }
  getInfo(){

    this.dataService.changeMessage(this.tracks.track);
    
  }

}
