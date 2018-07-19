import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheroComponent } from './chero.component';

describe('CheroComponent', () => {
  let component: CheroComponent;
  let fixture: ComponentFixture<CheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
