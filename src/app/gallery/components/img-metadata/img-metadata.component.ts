import { Component, OnInit } from '@angular/core';
import { Img } from '../../models/img';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-img-metadata',
  templateUrl: './img-metadata.component.html',
  styleUrls: ['./img-metadata.component.css']
})
export class ImgMetadataComponent implements OnInit {
  img : Img = {};

  constructor(private gallerysrv: GalleryService) { }

  ngOnInit(): void {
    this.gallerysrv.onSelectedImgChange().subscribe((i)=>{
      this.img = i;
    });
  }

}
