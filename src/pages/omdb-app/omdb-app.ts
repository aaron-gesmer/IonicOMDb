import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'omdb-app',
  templateUrl: 'omdb-app.html'
})
export class OMDbPage {

  title: string;
  year: string;
  url: string;
  searched = false

  constructor(private httpClient: HttpClient) {

  }

  search(title: string) {
    console.log('hello!');
    this.httpClient.get(`https://www.omdbapi.com/?apikey=c9e12726&t=${title}&plot=full`, { responseType: 'text' })
      .subscribe(response => {
        const respParse = JSON.parse(response);
        console.log(respParse);
        this.searched = true;

        this.title = respParse.Title;
        this.year = respParse.Year;
        this.url = respParse.Poster;
      });
  }
}