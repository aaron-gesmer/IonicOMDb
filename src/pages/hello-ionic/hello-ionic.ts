import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(private httpClient: HttpClient) {

  }

  foo() {
    console.log('hello!');
    this.httpClient.get('https://www.omdbapi.com/?apikey=c9e12726&t=poop&plot=full', { responseType: 'text' })
      .subscribe(response => {
        console.log(response);
      });
  }
}
