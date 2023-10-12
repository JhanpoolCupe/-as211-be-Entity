import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Transactional } from '../../model/transactionalp';
import { TransactionalpService } from '@soa/transactionalp/services/transactionalp.service';
import { ProgramaService } from '@soa/programa/service/programa.service';
import { ActividadService } from '@soa/actividad/service/actividad.service';


@Component({
  selector: 'app-transactionalp-form',
  templateUrl: './transactionalp-form.component.html',
  styleUrls: ['./transactionalp-form.component.scss']
})
export class TransactionalpFormComponent implements OnInit, OnDestroy{
 
  registroForm: FormGroup = new FormGroup({});

  programas: any[] = [];
  
  actividades: any[] = [];

  comboBoxData: {id:number, name:string} [] = [
    {
      id: 4,
      name: "Seguimos Ayudando"
    }
  ];

  comboBoxDatas: {id:number, name:string} [] = [
    {
      id: 1,
      name: "Actividad"
    }
  ];

  constructor(
    private transaccionalService: TransactionalpService,
    private programasService: ProgramaService,
    private actividadesService: ActividadService,
    private fb: FormBuilder
  ) {}
  


  ngOnInit(): void {
    this.initAsignationForm();
    this.findAllPrograma();
    this.findAllActividad();
  }

  registrarTransaccional() {
    if (this.registroForm.valid) {
      const datos = this.registroForm.value;
      this.transaccionalService.registrar(datos).subscribe((resultado) => {
      });
    }
  }

  findAllPrograma() {
    this.programasService.getProgramas().subscribe((dataprogramas: any) => {
      console.log('Datos del programas: ', dataprogramas);
      this.programas = dataprogramas;
    })
  }

  findAllActividad() {
    this.actividadesService.getActividades().subscribe((dataactividades: any) => {
      console.log('Datos obtenidos de Funcionario: ', dataactividades);
      this.actividades = dataactividades;
    })
  }


  initAsignationForm() {
    this.registroForm = this.fb.group({
      id:[null],
      id_programs: ['', Validators.required],
      id_activities: ['', Validators.required],
      date_asignation: ['', Validators.required],
      direction: ['', Validators.required],
      name_programs: ['', Validators.required],
      name_activities: ['', Validators.required],
      active: ['A']
    });
    if (this.transaccionalService.asignationSelected) {
      this.registroForm.patchValue(this.transaccionalService.asignationSelected);
    }
  }

  ngOnDestroy(): void {
    this.transaccionalService.asignationSelected = undefined;
  }
  
}