import { TestBed } from '@angular/core/testing';

import { TransactionalpService } from './transactionalp.service';

describe('TransactionalpService', () => {
  let service: TransactionalpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionalpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
