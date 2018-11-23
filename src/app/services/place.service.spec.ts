import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PlaceService } from './place.service';

describe('PlaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PlaceService,
      HttpClient,
      HttpHandler
      
    ]
  }));

  it('should be created', () => {
    const service: PlaceService = TestBed.get(PlaceService);
    expect(service).toBeTruthy();
  });
});
