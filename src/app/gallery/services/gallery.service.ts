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
    this.favsImg = this.loadLocalStorage();

    this.logSubject.subscribe(logStr => {
      console.log(logStr);
    });
  }

  private favsImg: Img[] = [];
  private selectedImgSubject: Subject<Img> = new Subject<Img>();
  private addImgToFavSubject: Subject<Img[]> = new Subject<Img[]>();
  private logSubject: Subject<string> = new Subject<string>();

  private loadLocalStorage(): Img[] {
    try {
      return JSON.parse(localStorage.getItem("Favs") || '');
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  private updateLocalStorage(): void {
    if (this.favsImg.length == 0)
      return;
    localStorage.setItem("Favs", JSON.stringify(this.favsImg));
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

  getFavsImg(): Img[] {
    return this.favsImg;
  }

  addImgToFav(img: Img): void {
    this.favsImg.push(img);
    this.addImgToFavSubject.next(this.favsImg);
    this.updateLocalStorage();
  }

  getLogger(): Subject<string> {
    return this.logSubject;
  }

}
