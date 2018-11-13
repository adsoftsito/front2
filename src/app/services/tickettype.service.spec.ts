import { TestBed } from '@angular/core/testing';

import { TickettypeService } from './tickettype.service';

describe('TickettypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TickettypeService = TestBed.get(TickettypeService);
    expect(service).toBeTruthy();
  });
});
