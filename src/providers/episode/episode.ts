import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the EpisodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EpisodeProvider {

  constructor(public http: Http) {
    console.log('Hello EpisodeProvider Provider');
  }

  getAllEpisodes(nextPage:string) {    
    if(nextPage == '')  
      return this.http.get('https://rickandmortyapi.com/api/episode/').toPromise().then(res => res.json());
    else
      return this.http.get(nextPage).toPromise().then(res => res.json());
  }

  getEpisode(id:string){
    return this.http.get('https://rickandmortyapi.com/api/episode/'+id).toPromise().then(res => res.json());
  }

}
