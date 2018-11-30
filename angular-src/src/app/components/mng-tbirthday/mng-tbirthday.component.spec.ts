import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngTbirthdayComponent } from './mng-tbirthday.component';

describe('MngTbirthdayComponent', () => {
  let component: MngTbirthdayComponent;
  let fixture: ComponentFixture<MngTbirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngTbirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngTbirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
