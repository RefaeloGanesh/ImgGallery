import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { ImgMetadataComponent } from './components/img-metadata/img-metadata.component';
import { ImgViewComponent } from './components/img-view/img-view.component';
import { ImgTabsComponent } from './components/img-tabs/img-tabs.component';


@NgModule({
  declarations: [
    GalleryComponent,
    ImgMetadataComponent,
    ImgViewComponent,
    ImgTabsComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
