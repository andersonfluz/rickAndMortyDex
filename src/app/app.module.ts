import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EpisodeDetailsPageModule } from '../pages/episode-details/episode-details.module';
import { EpisodeListPageModule } from '../pages/episode-list/episode-list.module';
import { LocationDetailsPageModule } from '../pages/location-details/location-details.module';
import { LocationListPageModule } from '../pages/location-list/location-list.module';
import { CharacterDetailsPageModule } from '../pages/character-details/character-details.module';
import { CharacterListPageModule } from '../pages/character-list/character-list.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EpisodeProvider } from '../providers/episode/episode';
import { LocationProvider } from '../providers/location/location';
import { CharacterProvider } from '../providers/character/character';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    EpisodeDetailsPageModule,
    EpisodeListPageModule,
    LocationDetailsPageModule,
    LocationListPageModule,
    CharacterDetailsPageModule,
    CharacterListPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    EpisodeDetailsPageModule,
    EpisodeListPageModule,
    LocationDetailsPageModule,
    LocationListPageModule,
    CharacterDetailsPageModule,
    CharacterListPageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EpisodeProvider,
    LocationProvider,
    CharacterProvider
  ]
})
export class AppModule {}
