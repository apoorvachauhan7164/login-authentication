import { TestBed, inject } from '@angular/core/testing';

import { MyserviceService } from './my-service.service';

describe('MyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyserviceService]
    });
  });

  it('should be created', inject([MyserviceService], (service: MyserviceService) => {
    expect(service).toBeTruthy();
  }));
});
