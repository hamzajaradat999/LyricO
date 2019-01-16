import { Component, OnInit,SimpleChanges } from '@angular/core';
import { GetMusixService } from 'src/app/service/get-musix.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  /* mess body track_list */
  private data:any;
  private tracks;
  private artistName:string
  private trackName:string
  private countryCode:string;
  private countryName:string;
  private isLoading:boolean=true;
  constructor(private dataService:GetMusixService) {}



  ngOnInit() {
    
    this.dataService.getTopChart().subscribe((res)=>{
/*       console.log(res);  
 */      this.data=res;
      this.tracks=this.data.message.body.track_list;
      this.isLoading=false;
      
    })

  }

  getArtist(){

    
    this.dataService.changeMessage(this.artistName)

  }

  getTrack(){

    this.dataService.changeMessage(this.trackName)


  }

 
  changeCountry(){
    console.log(this.countryCode);
    switch (this.countryName) {
      case "USA":
        this.countryCode="us"
        break;
        case "Argentina":
        this.countryCode="ar"
        break;
        case "Egypt":
        this.countryCode="eg"
        break;
    
      default:
        break;
    }
    this.dataService.getTopChart(this.countryCode).subscribe((res)=>{
/*       console.log(res);  
 */      this.data=res;
      this.tracks=this.data.message.body.track_list;
      
    })


  }

  switcher(value){
     this.dataService.changeMessage2(value);
  
  }


}
