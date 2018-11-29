import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngEditproComponent } from './mng-editpro.component';

describe('MngEditproComponent', () => {
  let component: MngEditproComponent;
  let fixture: ComponentFixture<MngEditproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngEditproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngEditproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
