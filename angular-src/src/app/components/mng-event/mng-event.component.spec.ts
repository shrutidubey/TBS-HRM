import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MngEventComponent } from './mng-event.component';

describe('MngEventComponent', () => {
  let component: MngEventComponent;
  let fixture: ComponentFixture<MngEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MngEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MngEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
