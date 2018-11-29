import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagLeaveComponent } from './mag-leave.component';

describe('MagLeaveComponent', () => {
  let component: MagLeaveComponent;
  let fixture: ComponentFixture<MagLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
