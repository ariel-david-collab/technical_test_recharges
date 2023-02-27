import { TestBed } from '@angular/core/testing';

import { RechargeService } from './recharge-service.service';

describe('RechargeServiceService', () => {
  let service: RechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
