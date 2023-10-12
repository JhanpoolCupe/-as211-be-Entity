import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { HomeTeenagerserviceService } from '../service/home-teenagerservice.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-modal-notification',
  templateUrl: './modal-notification.component.html',
  styleUrls: ['./modal-notification.component.scss'],
})
export class ModalNotificationComponent {
  foods: Food[] = [
    { value: 'Falta de incumplimiento', viewValue: 'Falta de incumplimiento' },
    { value: 'Falta de asisitencia', viewValue: 'Falta de asisitencia' },
    { value: 'Sin noticia', viewValue: 'Sin noticia' },
  ];
  idfuncionario: number | undefined; 
  identidad: number | undefined; 
  fecha: Date | any; 
  documento: String | undefined;
  accionSeleccionada: string | undefined;

  constructor(private apiService: HomeTeenagerserviceService, public dialogRef: MatDialogRef<ModalNotificationComponent>) { }
  onClose(): void {
    this.dialogRef.close();
  }
  

  onSave() {
    const formData = {
      id_funcionary: this.idfuncionario,
      id_entities: this.identidad,
      description: this.accionSeleccionada,
      date_notification: this.formatDate(this.fecha),
      url: this.documento,
      active: "A"
    };
  
   this.apiService.createNotification(formData).subscribe(
      (response) => {
        console.log('Notificación creada con éxito:', response);
        this.dialogRef.close();
      },
      (error) => {
        console.error('Error al crear la notificación:', error);
      }
    );
    
  };

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    return `${year}-${month < 10 ? '0' : ''}${month}-${day}`;
  }
}
