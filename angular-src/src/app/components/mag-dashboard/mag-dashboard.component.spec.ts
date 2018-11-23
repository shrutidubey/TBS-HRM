import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagDashboardComponent } from './mag-dashboard.component';

describe('MagDashboardComponent', () => {
  let component: MagDashboardComponent;
  let fixture: ComponentFixture<MagDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
