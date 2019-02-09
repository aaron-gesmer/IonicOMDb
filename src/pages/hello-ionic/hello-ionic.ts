import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'page-hello-ionic',
//   templateUrl: 'hello-ionic.html'
// })
export class HelloIonicPage {

  url: string;
  constructor(private httpClient: HttpClient) {

  }

  search(title: string) {
    console.log('hello!');
    this.httpClient.get(`https://www.omdbapi.com/?apikey=c9e12726&t=${title}&plot=full`, { responseType: 'text' })
      .subscribe(response => {
        const respParse = JSON.parse(response);
        console.log(respParse);

        this.url = respParse.Poster;
      });
  }
}
