import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngLeaverecComponent } from './mng-leaverec.component';

describe('MngLeaverecComponent', () => {
  let component: MngLeaverecComponent;
  let fixture: ComponentFixture<MngLeaverecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngLeaverecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngLeaverecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
