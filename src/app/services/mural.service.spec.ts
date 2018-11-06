import { TestBed, inject } from '@angular/core/testing';

import { MuralService } from './mural.service';

describe('MuralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuralService]
    });
  });

  it('should be created', inject([MuralService], (service: MuralService) => {
    expect(service).toBeTruthy();
  }));
});
