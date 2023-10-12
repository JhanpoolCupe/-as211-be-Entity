import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroNotificationComponent } from './modal-registro-notification.component';

describe('ModalRegistroNotificationComponent', () => {
  let component: ModalRegistroNotificationComponent;
  let fixture: ComponentFixture<ModalRegistroNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegistroNotificationComponent]
    });
    fixture = TestBed.createComponent(ModalRegistroNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
