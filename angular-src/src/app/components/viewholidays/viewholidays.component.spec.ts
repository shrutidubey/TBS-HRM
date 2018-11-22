import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewholidaysComponent } from './viewholidays.component';

describe('ViewholidaysComponent', () => {
  let component: ViewholidaysComponent;
  let fixture: ComponentFixture<ViewholidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewholidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
