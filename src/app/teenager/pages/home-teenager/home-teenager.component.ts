import { Component, OnInit } from '@angular/core';

import {MatDialog} from "@angular/material/dialog";
import {ModalNotificationComponent} from "@soa/teenager/pages/modal-notification/modal-notification.component";
import { HomeTeenagerserviceService } from '../service/home-teenagerservice.service';

@Component({
  selector: 'app-home-teenager',
  templateUrl: './home-teenager.component.html',
  styleUrls: ['./home-teenager.component.scss']
})
export class HomeTeenagerComponent implements OnInit{

  data: any;

  constructor(private apiService: HomeTeenagerserviceService,public dialog: MatDialog) {}
  ngOnInit(): void {
    this.findAll();
    this.listar();
  }
  listar(){
    this.apiService.getData().subscribe(
      (response: any) => {
        this.data = response.map((item: any) => {
          const fechaISO8601 = item.date_notification; 
          const fecha = new Date(fechaISO8601);
          const fechaFormateada = fecha.toLocaleDateString('es-ES'); 
          item.date_notification = fechaFormateada;
          return item;
        });
      }
    );
  }
  findAll() {
    

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalNotificationComponent, {
      width: '35%', // Ancho de la modal
      // Otras opciones de configuración de la modal si las necesitas
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('La modal ha sido cerrada.');
      this.listar();
    });
  }
}


