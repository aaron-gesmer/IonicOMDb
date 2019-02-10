import { Component } from '@angular/core';

import { OmdbService } from '../omdb-app.service';

@Component({
  selector: 'already-watched',
  templateUrl: './already-watched.html',
  styles: ['./already-watched.scss']
})
export class AlreadyWatched {
  constructor(private omdbService: OmdbService) { }

  getTitles() {
    return this.omdbService.alreadyWatched;
  }

  removeTitleFromAlreadyWatched(title: string) {
    this.omdbService.removeFromAlreadyWatched(title);
  }
}

