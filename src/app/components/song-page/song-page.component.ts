import { Component, OnInit } from '@angular/core';
import { GetMusixService } from 'src/app/service/get-musix.service';
import { ArrayType } from '@angular/compiler';
import { TypeModifier } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styleUrls: ['./song-page.component.scss']
})
export class SongPageComponent implements OnInit {
  private tracks:Array<any>=[];
  private track:{}
  private artistName:string;
  private trackName:string;
  private luckyId:string;
  private switch:any;
  private isLoading:Boolean=true;
  
  private data:any;
  constructor(private dataService:GetMusixService) { }

  ngOnInit(){
    this.dataService.currentMessage2.subscribe((message)=>this.switch=message)
    switch (this.switch) {
      case 1:
        this.getArtist()
        break;
      case 2:
        this.getTrack()
      break;
      case 3:
        this.getLuck()
      break; 
    
      default:
        break;
    }

  }

  
  getArtist(){
    this.dataService.currentMessage.subscribe((message)=>this.artistName=message)
    this.dataService.getData(this.artistName).subscribe((res)=>{
      this.data=res;
      this.tracks=this.data.message.body.track_list
      console.log("By Artist");
      console.log(this.tracks);
      this.isLoading=false;
    })
  }

  getTrack(){
    this.dataService.currentMessage.subscribe((message)=>this.trackName=message)
    this.dataService.getTrackData(this.trackName).subscribe((res)=>{
      this.data=res;
      this.tracks=this.data.message.body.track_list
      console.log("By Song Name");
      console.log(this.tracks);
      this.isLoading=false;


  })


}

getLuck(){
  this.dataService.currentMessage.subscribe((message)=>this.luckyId=message)
  this.dataService.getLucky(this.luckyId).subscribe((res)=>{
    this.data=res;
    this.track = this.data.message.body.track;
    console.log(this.data);
    console.log(this.track);
    this.isLoading=false;


})


}



}
 