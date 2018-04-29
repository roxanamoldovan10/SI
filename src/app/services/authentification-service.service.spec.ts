import { TestBed, inject } from '@angular/core/testing';

import { AutentificationServiceService } from './autentification-service.service';

describe('AutentificationServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificationServiceService]
    });
  });

  it('should be created', inject([AutentificationServiceService], (service: AutentificationServiceService) => {
    expect(service).toBeTruthy();
  }));
});
