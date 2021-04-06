import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
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
  loger?: Subject<string>;

  constructor(public gallerySrv: GalleryService) {

   }

  ngOnInit(): void {
    this.loger = this.gallerySrv.getLogger();
  }

  selectImg(img: Img) {
    this.gallerySrv.selectImg(img);
  }

  addToFav(img: Img) {
    this.gallerySrv.addImgToFav(img);
  }

  writeLog(logStr?: string): void{
    this.loger?.next(logStr);
  }


}
