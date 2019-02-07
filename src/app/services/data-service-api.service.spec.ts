import { TestBed } from '@angular/core/testing';

import { DataServiceApiService } from './data-service-api.service';

describe('DataServiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceApiService = TestBed.get(DataServiceApiService);
    expect(service).toBeTruthy();
  });
});
