import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetMusixService {
  private apikey:string = "286ea642d7f4fa304c78773de47565cd";

  private messageSource = new BehaviorSubject<any>("DeFult Messas");
  private messageSource2 = new BehaviorSubject<any>(0);

  currentMessage = this.messageSource.asObservable()
  currentMessage2 = this.messageSource2.asObservable()


  constructor(private http:HttpClient) {

    this.getThree()

  }

   changeMessage(message:any){
    this.messageSource.next(message)
   }
   changeMessage2(message:any){
    this.messageSource2.next(message)
   }

   getData(name){
     return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=${name}&page_size=100&page=1&s_track_rating=desc&apikey=${this.apikey}`)    
   }
   getTrackData(track="billie jean"){
    return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${track}&page_size=100&apikey=${this.apikey}`)    
  }
   getLucky(track){
    return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?commontrack_id=${track}&apikey=${this.apikey}`)    
  }
   getTopChart(country="us"){
     return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=100&country=${country}&f_has_lyrics=1&apikey=${this.apikey}`)
   }
   getLyrics(id){

     return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${this.apikey}`)/* .subscribe((res) => console.log(res)) */
     
   }
   getThree(){
     this.http.get(`matcher.track.get?q_track=Love%20the%20Way%20You%20Lie%20(Eminem%20and%20Rihanna)&q_artist=Eminem&apikey=${this.apikey}`)
     .subscribe((res)=>console.log(res))
   }
   getArtistData(){
     return this.http.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.get?artist_id=118&apikey=${this.apikey}`)
   }
   
}
