import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);


}
