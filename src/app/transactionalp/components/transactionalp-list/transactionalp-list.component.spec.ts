import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionalpListComponent } from './transactionalp-list.component';

describe('TransactionalpListComponent', () => {
  let component: TransactionalpListComponent;
  let fixture: ComponentFixture<TransactionalpListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionalpListComponent]
    });
    fixture = TestBed.createComponent(TransactionalpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
