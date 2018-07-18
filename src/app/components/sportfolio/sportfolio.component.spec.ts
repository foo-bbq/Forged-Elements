import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportfolioComponent } from './sportfolio.component';

describe('SportfolioComponent', () => {
  let component: SportfolioComponent;
  let fixture: ComponentFixture<SportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
