import { EpisodeDetailsPage } from './../episode-details/episode-details';
import { EpisodeProvider } from './../../providers/episode/episode';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EpisodeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-episode-list',
  templateUrl: 'episode-list.html',
})
export class EpisodeListPage {
  public listEpisode: any;
  public nextPage:any;
  public offset = true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public epProvider:EpisodeProvider) {
  }

  ngOnInit(){
    this.epProvider.getAllEpisodes('').then(
      data=>{
        this.nextPage = data.info.next;
        this.listEpisode = data.results;        
      }, error=>{
        console.log(error);
      });
  }

  doInfinite(infiniteScroll) {
    this.epProvider.getAllEpisodes(this.nextPage).then(
      data=>{
        this.nextPage = data.info.next;
        this.listEpisode =  this.listEpisode.concat(data.results);
        if(this.nextPage == ''){
          this.offset = false;
        }
      }, error=>{
        console.log(error);
      });
  }


  doRefresh(refresher) {
    this.offset = true;
    this.epProvider.getAllEpisodes('').then(
    data=>{
      this.nextPage = data.info.next;
      this.listEpisode = data.results;
      refresher.complete();       
    }, error=>{
      console.log(error);
      refresher.complete();  
    });
  }

  details(idEp){
    this.navCtrl.push(EpisodeDetailsPage, { idEp: idEp });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EpisodeDetailsPage');
  }
}
