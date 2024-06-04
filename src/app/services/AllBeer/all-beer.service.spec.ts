import { TestBed } from '@angular/core/testing';

import { AllBeerService } from './all-beer.service';

describe('AllBeerService', () => {
  let service: AllBeerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBeerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
