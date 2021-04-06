import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery.service';


@Component({
  selector: 'app-img-view',
  templateUrl: './img-view.component.html',
  styleUrls: ['./img-view.component.css'],

})
export class ImgViewComponent implements OnInit {

  constructor(private gallerysrv: GalleryService) { }
  imgUrl? : string;
  ngOnInit(): void {
    this.gallerysrv.onSelectedImgChange().subscribe((i)=>{
      this.imgUrl = i.download_url;
    });
  }

}
