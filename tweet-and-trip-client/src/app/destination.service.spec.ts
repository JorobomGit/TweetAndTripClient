import { TestBed, inject } from '@angular/core/testing';

import { DestinationService } from './destination.service';

describe('DestinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DestinationService]
    });
  });

  it('should be created', inject([DestinationService], (service: DestinationService) => {
    expect(service).toBeTruthy();
  }));
});
