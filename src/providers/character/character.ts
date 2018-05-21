import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CharacterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CharacterProvider {

  constructor(public http: Http) {
    console.log('Hello CharacterProvider Provider');
  }

  getAllCharacters(nextPage:string) {    
    if(nextPage == '')  
      return this.http.get('https://rickandmortyapi.com/api/character/').toPromise().then(res => res.json());
    else
      return this.http.get(nextPage).toPromise().then(res => res.json());
  }

  getCharacter(id:string){
    return this.http.get('https://rickandmortyapi.com/api/character/'+id).toPromise().then(res => res.json());
  }

  getCharacterUrl(url:string){
    return this.http.get(url).toPromise().then(res => res.json());
  }

}
