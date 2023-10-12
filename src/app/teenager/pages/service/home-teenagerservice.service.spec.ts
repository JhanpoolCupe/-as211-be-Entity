import { TestBed } from '@angular/core/testing';

import { HomeTeenagerserviceService } from './home-teenagerservice.service';

describe('HomeTeenagerserviceService', () => {
  let service: HomeTeenagerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeTeenagerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
