import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpFullComponent } from './emp-full.component';

describe('EmpFullComponent', () => {
  let component: EmpFullComponent;
  let fixture: ComponentFixture<EmpFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
