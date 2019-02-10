import { Injectable } from "@angular/core";

import { AlertController } from 'ionic-angular';

export interface TitleObject {
  title: string;
  imgUrl: string;
}

@Injectable()
export class OmdbService {

  alreadyWatched: TitleObject[] = [];
  watchList: TitleObject[] = [];

  constructor(private alertController: AlertController) { }

  addToAlreadyWatched(titleObject: TitleObject) {
    if (this.alreadyWatched.find(title => title.title === titleObject.title)) {
      this.alertAlreadyWatchedContainsTitle(titleObject);
    } else {
      this.alreadyWatched.push(titleObject);
      this.alertAddedToAlreadyWatchedList(titleObject);
    }
  }

  addToWatchList(titleObject: TitleObject) {
    if (this.alreadyWatched.find(title => title.title === titleObject.title)) {
      this.alertAlreadyWatchedContainsTitle(titleObject);
    } else {
      if (this.watchList.find(title => title.title === titleObject.title)) {
        this.alertWatchListContainsTitle(titleObject);
      } else {
        this.watchList.push(titleObject);
        this.alertAddedToWatchList(titleObject);
      }
    }
  }

  removeFromAlreadyWatched(title: string) {
    const titleObject = this.alreadyWatched.find(titleObject => titleObject.title === title);
    const index = this.alreadyWatched.indexOf(titleObject);
    this.alreadyWatched.splice(index, 1);
  }

  removeFromWatchList(title: string) {
    const titleObject = this.watchList.find(titleObject => titleObject.title === title);
    const index = this.watchList.indexOf(titleObject);
    this.watchList.splice(index, 1);
  }

  private alertAddedToAlreadyWatchedList(titleObject: TitleObject) {
    const alert = this.alertController.create({
      subTitle: `"${titleObject.title}" has been added to your Already Watched list`,
      buttons: ['Ok']
    });
    alert.present();
  }

  private alertAddedToWatchList(titleObject: TitleObject) {
    const alert = this.alertController.create({
      subTitle: `"${titleObject.title}" has been added to your Watch List`,
      buttons: ['Ok']
    });
    alert.present();
  }

  private alertAlreadyWatchedContainsTitle(titleObject: TitleObject): void {
    const alert = this.alertController.create({
      subTitle: `"${titleObject.title}" is already in your Already Watched list`,
      buttons: ['Ok']
    });
    alert.present();
  }

  private alertWatchListContainsTitle(titleObject: TitleObject): void {
    const alert = this.alertController.create({
      subTitle: `"${titleObject.title}" is already in your Watch List`,
      buttons: ['Ok']
    });
    alert.present();
  }
}
