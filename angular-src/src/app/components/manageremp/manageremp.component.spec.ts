import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerempComponent } from './manageremp.component';

describe('ManagerempComponent', () => {
  let component: ManagerempComponent;
  let fixture: ComponentFixture<ManagerempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
