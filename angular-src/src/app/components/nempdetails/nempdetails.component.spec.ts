import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NempdetailsComponent } from './nempdetails.component';

describe('NempdetailsComponent', () => {
  let component: NempdetailsComponent;
  let fixture: ComponentFixture<NempdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NempdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NempdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
