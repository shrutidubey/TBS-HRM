import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingleavesComponent } from './pendingleaves.component';

describe('PendingleavesComponent', () => {
  let component: PendingleavesComponent;
  let fixture: ComponentFixture<PendingleavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingleavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
