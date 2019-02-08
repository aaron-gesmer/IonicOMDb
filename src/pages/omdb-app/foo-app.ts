import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { OmdbService } from './omdb-app.service';

@Component({
  selector: 'foo-app',
  templateUrl: './foo-app.html',
})
export class FooApp {

  constructor(private omdbService: OmdbService) {}

  foo() {
    return this.omdbService.titles;
  }

  bar() {
    console.log(this.omdbService.imgUrls);
    return this.omdbService.imgUrls;
  }

  getTitles() {
    return this.omdbService.titleObjects;
  }
}