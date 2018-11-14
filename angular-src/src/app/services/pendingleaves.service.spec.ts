import { TestBed } from '@angular/core/testing';

import { PendingleavesService } from './pendingleaves.service';

describe('PendingleavesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PendingleavesService = TestBed.get(PendingleavesService);
    expect(service).toBeTruthy();
  });
});
