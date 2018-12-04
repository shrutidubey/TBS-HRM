import { TestBed } from '@angular/core/testing';

import { MainDashboardService } from './main-dashboard.service';

describe('MainDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainDashboardService = TestBed.get(MainDashboardService);
    expect(service).toBeTruthy();
  });
});
