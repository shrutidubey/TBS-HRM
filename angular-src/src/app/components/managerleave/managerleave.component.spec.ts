import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerleaveComponent } from './managerleave.component';

describe('ManagerleaveComponent', () => {
  let component: ManagerleaveComponent;
  let fixture: ComponentFixture<ManagerleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
