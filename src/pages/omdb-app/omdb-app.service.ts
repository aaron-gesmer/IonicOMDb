import { Injectable } from "@angular/core";

export interface TitleObject {
  title: string;
  imgUrl: string;
}

@Injectable()
export class OmdbService {
  titles: string[] = [];

  imgUrls: string[] = [];

  titleObjects: TitleObject[] = [];

  alreadyWatched: TitleObject[] = [];
  watchList: TitleObject[] = [];


  addTitle(title: string) {
    this.titles.push(title);
  }

  addImgUrl(imgUrl: string) {
    this.imgUrls.push(imgUrl);
  }

  addTitleObject(titleObject: TitleObject) {
    this.titleObjects.push(titleObject);
  }

  addToAlreadyWatched(titleObject: TitleObject) {
    this.alreadyWatched.push(titleObject);
  }

  addToWatchList(titleObject: TitleObject) {
    this.watchList.push(titleObject);
  }
}