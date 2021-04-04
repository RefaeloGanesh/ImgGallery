import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTabsComponent } from './img-tabs.component';

describe('ImgTabsComponent', () => {
  let component: ImgTabsComponent;
  let fixture: ComponentFixture<ImgTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
