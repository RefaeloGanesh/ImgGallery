import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ImgMetadataComponent } from './components/img-metadata/img-metadata.component';
import { ImgViewComponent } from './components/img-view/img-view.component';
import { ImgTabsComponent } from './components/img-tabs/img-tabs.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatTabsModule} from '@angular/material/tabs';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';


@NgModule({
  declarations: [
    GalleryComponent,
    ImgMetadataComponent,
    ImgViewComponent,
    ImgTabsComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    ScrollingModule,
    MatTabsModule
  ],
  providers:[]
})
export class GalleryModule { }
