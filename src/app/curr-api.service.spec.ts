import { TestBed } from '@angular/core/testing';

import { CurrAPIService } from './curr-api.service';

describe('CurrAPIService', () => {
  let service: CurrAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
