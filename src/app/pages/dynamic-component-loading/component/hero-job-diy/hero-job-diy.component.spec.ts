import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobDiyComponent } from './hero-job-diy.component';

describe('HeroJobDiyComponent', () => {
  let component: HeroJobDiyComponent;
  let fixture: ComponentFixture<HeroJobDiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroJobDiyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroJobDiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
