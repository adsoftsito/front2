import { TestBed } from '@angular/core/testing';

import { DateinformationService } from './dateinformation.service';

describe('DateinformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateinformationService = TestBed.get(DateinformationService);
    expect(service).toBeTruthy();
  });
});
