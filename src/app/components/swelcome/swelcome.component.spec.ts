import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwelcomeComponent } from './swelcome.component';

describe('SwelcomeComponent', () => {
  let component: SwelcomeComponent;
  let fixture: ComponentFixture<SwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
