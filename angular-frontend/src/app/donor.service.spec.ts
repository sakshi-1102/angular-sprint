import { TestBed } from '@angular/core/testing';

import { DonorService } from './DonorService';

describe('DonorService', () => {
  let service: DonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
