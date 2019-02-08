import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlertController } from 'ionic-angular';

import { OmdbService } from './omdb-app.service';

@Component({
  selector: 'omdb-app',
  templateUrl: './omdb-app.html',
  styles: [`
    .search-omdb {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    .search-omdb input{
      width: 60%;
    }

    .movie-result {
      width: 90%;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    .movie-result p {
      text-align: justify;
    }

    .movie-result button {
      width: 70%;
    }

    .movie-result table {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class OMDbPage {

  title: string;
  year: string;
  plot: string;
  url: string;

  imdb: string;
  rt: string;
  mc: string;

  searched = false

  constructor(private httpClient: HttpClient,
    private omdbService: OmdbService,
    private alertController: AlertController) {

  }

  search(title: string) {
    this.httpClient.get(`https://www.omdbapi.com/?apikey=c9e12726&t=${title}&plot=full`, { responseType: 'text' })
      .subscribe(response => {
        const respParse = JSON.parse(response);
        console.log(respParse);
        this.searched = true;

        this.title = respParse.Title;
        this.year = respParse.Year;
        this.url = respParse.Poster;
        this.plot = respParse.Plot;

        this.imdb = respParse.Ratings[0].Value;
        this.rt = respParse.Ratings[1] ? respParse.Ratings[1].Value : '--';
        this.mc = respParse.Ratings[2] ? respParse.Ratings[2].Value : '--';
      });
  }

  foo() {
    this.omdbService.addTitleObject({
      title: this.title,
      imgUrl: this.url
    });

    const alert = this.alertController.create({
      // title: `${this.title} has been added to your "Already Watched" list`,
      subTitle: `"${this.title}" has been added to your Already Watched list`
    });
    alert.present();
  }

  bar() {
    console.log('foo!');
  }
}