import { TestBed } from '@angular/core/testing';

import { MagdashboardService } from './magdashboard.service';

describe('MagdashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MagdashboardService = TestBed.get(MagdashboardService);
    expect(service).toBeTruthy();
  });
});
