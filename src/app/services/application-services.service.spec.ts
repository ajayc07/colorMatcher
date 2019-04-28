import { TestBed } from '@angular/core/testing';

import { ApplicationServicesService } from './application-services.service';

describe('ApplicationServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplicationServicesService = TestBed.get(ApplicationServicesService);
    expect(service).toBeTruthy();
  });
});
