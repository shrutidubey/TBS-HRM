import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmLeaveComponent } from './adm-leave.component';

describe('AdmLeaveComponent', () => {
  let component: AdmLeaveComponent;
  let fixture: ComponentFixture<AdmLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
