import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiyBannerComponent } from './diy-banner.component';

describe('DiyBannerComponent', () => {
  let component: DiyBannerComponent;
  let fixture: ComponentFixture<DiyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiyBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
