import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplabookComponent } from './displabook.component';

describe('DisplabookComponent', () => {
  let component: DisplabookComponent;
  let fixture: ComponentFixture<DisplabookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplabookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplabookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
