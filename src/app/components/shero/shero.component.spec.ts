import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheroComponent } from './shero.component';

describe('SheroComponent', () => {
  let component: SheroComponent;
  let fixture: ComponentFixture<SheroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
