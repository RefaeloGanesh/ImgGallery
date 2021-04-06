import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GalleryModule } from '../gallery.module';
import { Img } from '../models/img';
import { catchError, map, tap } from 'rxjs/operators';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  private favsImg: Img[] = [];

  private selectedImgSubject = new Subject<Img>();
  private addImgToFavSubject = new Subject<Img[]>();

  private loadLocalStorage(): Img[] {
    try {
      return JSON.parse(localStorage.getItem("Favs") || '');
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  onSelectedImgChange(): Observable<Img> {
    return this.selectedImgSubject;
  }

  selectImg(img: Img): void {
    this.selectedImgSubject.next(img);
  }

  getImgs(): Observable<Img[]> {
    return this.http.get<Img[]>("https://picsum.photos/v2/list?limit=50");
  }

  onAddingImgToFav(): Observable<Img[]> {
    return this.addImgToFavSubject;
  }

  addImgToFav(img: Img): void {
    this.favsImg.push(img);
    this.addImgToFavSubject.next(this.favsImg);
  }
}
