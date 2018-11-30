import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngLeaveComponent } from './mng-leave.component';

describe('MngLeaveComponent', () => {
  let component: MngLeaveComponent;
  let fixture: ComponentFixture<MngLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
