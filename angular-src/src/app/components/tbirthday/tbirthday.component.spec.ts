import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbirthdayComponent } from './tbirthday.component';

describe('TbirthdayComponent', () => {
  let component: TbirthdayComponent;
  let fixture: ComponentFixture<TbirthdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbirthdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
