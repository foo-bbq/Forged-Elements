import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CportfolioComponent } from './cportfolio.component';

describe('CportfolioComponent', () => {
  let component: CportfolioComponent;
  let fixture: ComponentFixture<CportfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CportfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
