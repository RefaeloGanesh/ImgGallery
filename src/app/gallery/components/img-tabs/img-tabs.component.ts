import { Component, OnInit } from '@angular/core';
import { Img } from '../../models/img';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-img-tabs',
  templateUrl: './img-tabs.component.html',
  styleUrls: ['./img-tabs.component.css']
})
export class ImgTabsComponent implements OnInit {

  constructor(private gallerySrv: GalleryService) { }

  ngOnInit(): void {
    this.fav = this.gallerySrv.getFavsImg();

    this.gallerySrv.getImgs().subscribe(arr =>{
      this.all = arr;
    });

    this.gallerySrv.onAddingImgToFav().subscribe(arr =>{
      this.fav = arr;
    });
  }

  all: Img[] = [];
  fav: Img[] = [];

}
