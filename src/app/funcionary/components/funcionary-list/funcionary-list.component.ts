import { Component, OnInit } from '@angular/core';
import { ModalRegistroFuncionaryComponent } from "@soa/funcionary/components/modal-registro-funcionary/modal-registro-funcionary.component";
import { MatDialog } from '@angular/material/dialog';
import { Funcionary } from '@soa/funcionary/model/funcionary.model';
import { FuncionaryService } from '@soa/funcionary/services/funcionary.service';

@Component({
  selector: 'app-funcionary-list',
  templateUrl: './funcionary-list.component.html',
  styleUrls: ['./funcionary-list.component.scss'],
})
export class FuncionaryListComponent implements OnInit {
  dataSource: Funcionary[] = [];
  estadoFiltrado: string = 'Todos';
  estadoActual: string = 'Activo'; // Nuevo atributo para el estado actual

  constructor(public dialog: MatDialog, private funcionaryService: FuncionaryService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.funcionaryService
      .findAll()
      .subscribe((res) => (this.dataSource = res));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalRegistroFuncionaryComponent, {
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('La modal ha sido cerrada.');
      this.listar();
    });
  }

  editarEntidad(entidad: Funcionary) {
    this.funcionaryService.entidadSelected = entidad;
    this.openDialog();
  }

  deleteEntidad(id: string) {
    this.funcionaryService.delete(id).subscribe((res) => {
      console.log('Se eliminó la entidad', res);
      this.listar();
    });
  }



  listar() {
    this.funcionaryService.findAll().subscribe((res: Funcionary[]) => {
      console.log(res);
      // Filtra el dataSource en función del estado seleccionado
      this.dataSource = this.estadoFiltrado === 'Todos'
        ? res
        : res.filter((entidad) => entidad.estado === this.estadoFiltrado);
    });
  }
  activarEntidad(id: string): void {
    this.funcionaryService.activarEntidad(id).subscribe(() => {
      console.log('Entidad activada correctamente.');
      this.listar();
    });
  }
}

