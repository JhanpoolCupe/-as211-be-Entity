import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Funcionary } from '@soa/funcionary/model/funcionary.model';
import { FuncionaryService } from '@soa/funcionary/services/funcionary.service';

@Component({
  selector: 'app-modal-registro-funcionary',
  templateUrl: './modal-registro-funcionary.component.html',
  styleUrls: ['./modal-registro-funcionary.component.scss']
})
export class ModalRegistroFuncionaryComponent implements OnInit, OnDestroy{
  entidadesForm: FormGroup = new FormGroup({});

  constructor(public dialogRef: MatDialogRef<ModalRegistroFuncionaryComponent>,
              private fb: FormBuilder,
              public entidadesService: FuncionaryService) { }
  ngOnInit(): void {
    this.initEntidadesForm();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  initEntidadesForm() {
    this.entidadesForm = this.fb.group({
      id: [null],
      nombre: ['',[Validators.required]],
      ruc: [null, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      contacto: ['', [Validators.required, Validators.pattern('^9[0-9]{8}$')]],
      direccion: ['',[Validators.required]],
      estado: ['A'],
    });

    if (this.entidadesService.entidadSelected) {
      this.entidadesForm.patchValue(this.entidadesService.entidadSelected);
    }
  }

  saveEntidades() {
    if (this.entidadesService.entidadSelected) {
      this.updateEntidad();
    } else {
      this.createEntidades();
    }
  }

  createEntidades() {
    console.log('Datos de Entidades Cooperantes:', this.entidadesForm.value)
    this.entidadesService.create(this.entidadesForm.value).subscribe(res => {
      console.log('Se guardo correctamente:', res);
      this.entidadesForm.reset();
      this.onClose();
    })
  }

  updateEntidad() {
    console.log('Datos de Entidades Cooperantes:', this.entidadesForm.value)
    this.entidadesService.update(this.entidadesForm.value).subscribe(res => {
      console.log('Se actualizó correctamente', res);
      this.entidadesForm.reset();
      this.onClose();
    })
  }

  ngOnDestroy() {
    this.entidadesService.entidadSelected = undefined;
  }
}
