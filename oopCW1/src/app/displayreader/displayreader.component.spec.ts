import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayreaderComponent } from './displayreader.component';

describe('DisplayreaderComponent', () => {
  let component: DisplayreaderComponent;
  let fixture: ComponentFixture<DisplayreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
