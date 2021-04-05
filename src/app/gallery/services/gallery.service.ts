import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { GalleryModule } from '../gallery.module';
import { Img } from '../models/img';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  private selectedImgSubject = new Subject<Img>();

  onSelectedImgChange() : Observable<Img>{
    return this.selectedImgSubject;
  }

  selectImg(img:Img) : void{
    this.selectedImgSubject.next(img);
  }

  getImgs(): Observable<Img[]>{
    return this.http.get<Img[]>("https://picsum.photos/v2/list");
  }
}
