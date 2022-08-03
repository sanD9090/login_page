import { TestBed } from '@angular/core/testing';

import { GuardStatusService } from './guard-status.service';

describe('GuardStatusService', () => {
  let service: GuardStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
