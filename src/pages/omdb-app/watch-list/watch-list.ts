import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { OmdbService } from '../omdb-app.service';

@Component({
  selector: 'watch-list',
  templateUrl: './watch-list.html'
})
export class WatchList {

  constructor(private omdbService: OmdbService, private alertController: AlertController) { }

  getTitles() {
    return JSON.parse(localStorage.getItem('watchList'));
  }

  removeTitleFromWatchList(title: string) {
    const alert = this.alertController.create({
      subTitle: `You're about to delete "${title}" from your Watch List. Continue?`,
      buttons: [
        {
            text: 'Yes',
            handler: () => {
              this.omdbService.removeFromWatchList(title);
            }
        },
        {
            text: 'Cancel',
            handler: () => {
              // do nothing
            }
        }
      ]
    });
    alert.present();
  }

  watchedTitle(title: string) {
    const alert = this.alertController.create({
      subTitle: `Proceed with moving "${title}" to your Already Watched list?`,
      buttons: [
        {
            text: 'Yes',
            handler: () => {
              this.omdbService.watchedTitle(title);
            }
        },
        {
            text: 'No',
            handler: () => {
              // do nothing
            }
        }
      ]
    });
    alert.present();
  }
}
