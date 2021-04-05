import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-img-tabs',
  templateUrl: './img-tabs.component.html',
  styleUrls: ['./img-tabs.component.css']
})
export class ImgTabsComponent implements OnInit {

  constructor(private gallerySrv: GalleryService) { }

  ngOnInit(): void {
  }

  all = this.gallerySrv.getImgs();
  fav = [];

}
