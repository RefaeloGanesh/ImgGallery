import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMetadataComponent } from './img-metadata.component';

describe('ImgMetadataComponent', () => {
  let component: ImgMetadataComponent;
  let fixture: ComponentFixture<ImgMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
