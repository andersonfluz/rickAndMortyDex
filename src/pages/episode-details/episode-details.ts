import { CharacterProvider } from './../../providers/character/character';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EpisodeProvider } from '../../providers/episode/episode';
import { CharacterDetailsPage } from '../character-details/character-details';

/**
 * Generated class for the EpisodeDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episode-details',
  templateUrl: 'episode-details.html',
})
export class EpisodeDetailsPage implements OnInit {
  public dataEpisode: any = [];
  public listCharacters:any =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public epProvider:EpisodeProvider, public chProvider:CharacterProvider) {
  }

  ngOnInit(){    
    this.epProvider.getEpisode(this.navParams.get('idEp')).then(
      data=>{
        this.dataEpisode = data;
        this.loadCharactersEpisode(data.characters);       
      }, error=>{
        console.log(error);
    });
  }

  loadCharactersEpisode(characters:any){
    characters.forEach(character => {
      this.chProvider.getCharacterUrl(character).then(
        data=>{
          this.listCharacters.push(data);        
        }, error=>{
          console.log(error);
      });
    });
  }

  detailsCharacter(idCh){
    this.navCtrl.push(CharacterDetailsPage, { idCh: idCh });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EpisodeDetailsPage');
  }



}
