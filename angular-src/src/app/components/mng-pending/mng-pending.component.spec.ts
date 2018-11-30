import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngPendingComponent } from './mng-pending.component';

describe('MngPendingComponent', () => {
  let component: MngPendingComponent;
  let fixture: ComponentFixture<MngPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
