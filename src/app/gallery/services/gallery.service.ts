import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GalleryModule } from '../gallery.module';
import { Img } from '../models/img';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  private selectedImgSubject = new Subject<Img>();

  onSelectedImgChange() : Observable<Img>{
    return this.selectedImgSubject;
  }

  selectImg(img:Img) : void{
    this.selectedImgSubject.next(img);
  }

  getImgs(): Array<Img>{
    return [
      {Id: 1, Size: 5, Name: "Refael"},
      {Id: 2, Size: 5, Name: "Refael1"},
      {Id: 3, Size: 5, Name: "Refael2"},
      {Id: 4, Size: 5, Name: "Refael3"},
      {Id: 5, Size: 5, Name: "Refael4"},
      {Id: 6, Size: 5, Name: "Refael5"},
      {Id: 7, Size: 5, Name: "Refael6"},
      {Id: 8, Size: 5, Name: "Refael7"},
    ]
  }
}
