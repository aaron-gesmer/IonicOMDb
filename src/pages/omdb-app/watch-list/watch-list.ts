import { Component } from '@angular/core';

import { OmdbService } from '../omdb-app.service';

@Component({
  selector: 'watch-list',
  templateUrl: './watch-list.html'
})
export class WatchList {

  constructor(private omdbService: OmdbService) { }

  getTitles() {
    return this.omdbService.watchList;
  }
}
