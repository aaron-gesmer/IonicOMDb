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


  addTitle(title: string) {
    this.titles.push(title);
  }

  addImgUrl(imgUrl: string) {
    this.imgUrls.push(imgUrl);
  }

  addTitleObject(titleObject: TitleObject) {
    this.titleObjects.push(titleObject);
  }
}