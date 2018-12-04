import { TestBed } from '@angular/core/testing';

import { EmpdashboardService } from './empdashboard.service';

describe('EmpdashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpdashboardService = TestBed.get(EmpdashboardService);
    expect(service).toBeTruthy();
  });
});
