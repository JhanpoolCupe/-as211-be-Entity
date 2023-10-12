import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroFuncionaryComponent } from './modal-registro-funcionary.component';

describe('ModalRegistroFuncionaryComponent', () => {
  let component: ModalRegistroFuncionaryComponent;
  let fixture: ComponentFixture<ModalRegistroFuncionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRegistroFuncionaryComponent]
    });
    fixture = TestBed.createComponent(ModalRegistroFuncionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
