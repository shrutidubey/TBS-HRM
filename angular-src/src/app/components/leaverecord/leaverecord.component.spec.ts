import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaverecordComponent } from './leaverecord.component';

describe('LeaverecordComponent', () => {
  let component: LeaverecordComponent;
  let fixture: ComponentFixture<LeaverecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaverecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaverecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
