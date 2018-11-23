import { TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
xdescribe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginService,
      Router,
      HttpClient,
      HttpHandler
      
    ]
  }));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
