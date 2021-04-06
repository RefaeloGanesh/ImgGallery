import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Img } from '../../models/img';
import { GalleryService } from '../../services/gallery.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent implements OnInit {
  @Input() items: Array<Img> = [];
  @Input() enableAddFavs: boolean = false;
  firstClick: boolean = false;
  lastImgId: number = 0;
  loger?: Subject<string>;

  constructor(public gallerySrv: GalleryService, private _snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.loger = this.gallerySrv.getLogger();
  }

  selectImg(img: Img) {
    this.gallerySrv.selectImg(img);
  }

  addToFav(img: Img) {
    if (this.enableAddFavs) {
      this.gallerySrv.addImgToFav(img);
      this.openSnackBar("Img Added To Favorits");
    }
  }

  writeLog(logStr?: string): void {
    this.loger?.next(logStr);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

}
