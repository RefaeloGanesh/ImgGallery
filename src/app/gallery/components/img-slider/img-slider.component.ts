import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Img } from '../../models/img';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent implements OnInit {
  @Input() items: Array<Img> = [];
  firstClick: boolean = false;
  lastImgId: number = 0;

  constructor(private gallerySrv: GalleryService) { }

  ngOnInit(): void {
  }

  selectImg(img: Img) {
    this.gallerySrv.selectImg(img);
  }

  addToFav() {
    console.log('Add To fav');
  }


}
