import { TestBed } from '@angular/core/testing';

import { MaryleBonePrimeNumberService } from './maryle-bone-prime-number.service';

describe('MaryleBonePrimeNumberService', () => {
  let service: MaryleBonePrimeNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaryleBonePrimeNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
