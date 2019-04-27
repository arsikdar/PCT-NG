import { TestBed } from '@angular/core/testing';

import { DeGuardService } from './de-guard.service';

describe('DeGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeGuardService = TestBed.get(DeGuardService);
    expect(service).toBeTruthy();
  });
});
