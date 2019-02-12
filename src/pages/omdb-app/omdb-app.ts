import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';

import { OmdbService } from './omdb-app.service';
import { SearchTitleService } from './search-title.service';

@Component({
  selector: 'omdb-app',
  templateUrl: './omdb-app.html',
  styles: ['./omdb-app.scss']
})
export class OmdbApp {

  constructor(private omdbService: OmdbService,
    private titleSearch: SearchTitleService,
    private alertController: AlertController) {

  }

  search(title: string) {
    this.titleSearch.searchTitle(title);
  }

  addToAlreadyWatched() {
    this.omdbService.addToAlreadyWatched({
      title: this.getTitle(),
      year: this.getYear(),
      type: this.getType(),
      imgUrl: this.getImgUrl()
    });
  }

  addToWatchList() {
    this.omdbService.addToWatchList({
      title: this.getTitle(),
      year: this.getYear(),
      type: this.getType(),
      imgUrl: this.getImgUrl()
    });
  }

  public isValidSearch = () => this.titleSearch.isValidSearch();
  public isNotFound = () => this.titleSearch.isNotFound();
  public isNotProvided = () => this.titleSearch.isNotProvided();

  public getTitle = () => this.titleSearch.getTitle();
  public getYear = () => this.titleSearch.getYear();
  public getDirector = () => this.titleSearch.getDirector();
  public getImgUrl = () => this.titleSearch.getImgUrl();
  public getPlot = () => this.titleSearch.getPlot();
  public getAwards = () => this.titleSearch.getAwards();
  public getBoxOffice = () => this.titleSearch.getBoxOffice();
  public getRuntime = () => this.titleSearch.getRuntime();
  public getImdbRating = () => this.titleSearch.getImdbRating();
  public getRottenTomatoesRating = () => this.titleSearch.getRottenTomatoesRating();
  public getMetacriticRating = () => this.titleSearch.getMetacriticRating();
  public getType = () => this.titleSearch.getType();
}
