import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Displaydvd3Component } from './displaydvd3.component';

describe('Displaydvd3Component', () => {
  let component: Displaydvd3Component;
  let fixture: ComponentFixture<Displaydvd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Displaydvd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Displaydvd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
