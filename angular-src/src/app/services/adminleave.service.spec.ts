import { TestBed } from '@angular/core/testing';

import { AdminleaveService } from './adminleave.service';

describe('AdminleaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminleaveService = TestBed.get(AdminleaveService);
    expect(service).toBeTruthy();
  });
});
