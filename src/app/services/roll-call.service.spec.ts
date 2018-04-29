import { TestBed, inject } from '@angular/core/testing';

import { RollCallService } from './roll-call.service';

describe('RollCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RollCallService]
    });
  });

  it('should be created', inject([RollCallService], (service: RollCallService) => {
    expect(service).toBeTruthy();
  }));
});
