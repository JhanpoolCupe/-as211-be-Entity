import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionalpFormComponent } from './transactionalp-form.component';

describe('TransactionalpFormComponent', () => {
  let component: TransactionalpFormComponent;
  let fixture: ComponentFixture<TransactionalpFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionalpFormComponent]
    });
    fixture = TestBed.createComponent(TransactionalpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
