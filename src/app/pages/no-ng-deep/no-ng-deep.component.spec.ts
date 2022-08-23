import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoNgDeepComponent } from './no-ng-deep.component';

describe('NoNgDeepComponent', () => {
  let component: NoNgDeepComponent;
  let fixture: ComponentFixture<NoNgDeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoNgDeepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoNgDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
