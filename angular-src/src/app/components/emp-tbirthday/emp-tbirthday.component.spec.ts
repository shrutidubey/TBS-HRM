import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpTbirthdayComponent } from './emp-tbirthday.component';

describe('EmpTbirthdayComponent', () => {
  let component: EmpTbirthdayComponent;
  let fixture: ComponentFixture<EmpTbirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpTbirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpTbirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
