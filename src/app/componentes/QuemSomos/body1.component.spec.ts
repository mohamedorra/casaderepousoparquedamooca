import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Body1Component } from './body1.component';

describe('Body1Component', () => {
  let component: Body1Component;
  let fixture: ComponentFixture<Body1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Body1Component]
    });
    fixture = TestBed.createComponent(Body1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




