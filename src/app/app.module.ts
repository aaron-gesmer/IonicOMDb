import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Components:
import { OmdbApp } from '../pages/omdb-app/omdb-app';
import { AlreadyWatched } from '../pages/omdb-app/already-watched/already-watched';
import { WatchList } from '../pages/omdb-app/watch-list/watch-list';

// Services:
import { OmdbService } from '../pages/omdb-app/omdb-app.service';
import { SearchTitleService } from '../pages/omdb-app/search-title.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    OmdbApp,
    AlreadyWatched,
    WatchList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OmdbApp,
    AlreadyWatched,
    WatchList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OmdbService,
    SearchTitleService
  ]
})
export class AppModule {}
