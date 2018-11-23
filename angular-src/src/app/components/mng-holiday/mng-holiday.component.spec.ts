import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngHolidayComponent } from './mng-holiday.component';

describe('MngHolidayComponent', () => {
  let component: MngHolidayComponent;
  let fixture: ComponentFixture<MngHolidayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngHolidayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
