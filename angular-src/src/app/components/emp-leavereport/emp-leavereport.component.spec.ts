import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLeavereportComponent } from './emp-leavereport.component';

describe('EmpLeavereportComponent', () => {
  let component: EmpLeavereportComponent;
  let fixture: ComponentFixture<EmpLeavereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpLeavereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpLeavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
