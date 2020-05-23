import { TestBed } from '@angular/core/testing';

import { PlusService } from './plus.service';

describe('PlusService', () => {
  let service: PlusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
