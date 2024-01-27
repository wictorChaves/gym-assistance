import { TestBed } from '@angular/core/testing';

import { LocalStorageRepeatsService } from './local-storage-repeats.service';

describe('LocalStorageRepeatsService', () => {
  let service: LocalStorageRepeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageRepeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
