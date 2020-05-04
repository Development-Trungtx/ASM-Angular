import { TestBed } from '@angular/core/testing';

import { ServiceOrderCartService } from './service-order-cart.service';

describe('ServiceOrderCartService', () => {
  let service: ServiceOrderCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOrderCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
