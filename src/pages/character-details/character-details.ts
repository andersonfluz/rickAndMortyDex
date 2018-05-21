import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CharacterProvider } from '../../providers/character/character';

/**
 * Generated class for the CharacterDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-character-details',
  templateUrl: 'character-details.html',
})
export class CharacterDetailsPage {
  public dataCharacter: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public chProvider:CharacterProvider) {
  }

  ngOnInit(){ 
    this.dataCharacter.origin = [];
    this.dataCharacter.location = [];
    this.chProvider.getCharacter(this.navParams.get('idCh')).then(
      data=>{
        this.dataCharacter = data;     
      }, error=>{
        console.log(error);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterDetailsPage');
  }

}
