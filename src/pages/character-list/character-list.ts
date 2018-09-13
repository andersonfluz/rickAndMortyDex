import { CharacterDetailsPage } from './../character-details/character-details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterProvider } from '../../providers/character/character';

/**
 * Generated class for the CharacterListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-list',
  templateUrl: 'character-list.html',
})
export class CharacterListPage {
  public listCharacter: any;
  public nextPage:any;
  public offset = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public chProvider:CharacterProvider) {
  }

  ngOnInit(){
    this.chProvider.getAllCharacters('').then(
      data=>{
        this.nextPage = data.info.next;
        this.listCharacter = data.results;        
      }, error=>{
        console.log(error);
      });
  }

  doInfinite(infiniteScroll) {
    this.chProvider.getAllCharacters(this.nextPage).then(
      data=>{
        this.nextPage = data.info.next;
        this.listCharacter =  this.listCharacter.concat(data.results);
        if(this.nextPage == ''){
          this.offset = false;
        }
      }, error=>{
        console.log(error);
      });
  }

  doRefresh(refresher) {
    this.offset = true;
    this.chProvider.getAllCharacters('').then(
    data=>{
      this.nextPage = data.info.next;
      this.listCharacter = data.results;
      refresher.complete();       
    }, error=>{
      console.log(error);
      refresher.complete();  
    });
  }

  details(idCh){
    this.navCtrl.push(CharacterDetailsPage, { idCh: idCh });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterListPage');
  }

}
