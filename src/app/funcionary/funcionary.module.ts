import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
import { FuncionaryRoutingModule } from './funcionary-routing.module';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';
import { FuncionaryListComponent } from './components/funcionary-list/funcionary-list.component';
import { ModalRegistroFuncionaryComponent } from './components/modal-registro-funcionary/modal-registro-funcionary.component';
import {MatDialogModule} from '@angular/material/dialog';
import { NotificationComponent } from './components/notification/notification.component';
import { ModalRegistroNotificationComponent } from './components/modal-registro-notification/modal-registro-notification.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [HomeFuncionaryPage, FuncionaryListComponent, ModalRegistroFuncionaryComponent, NotificationComponent, ModalRegistroNotificationComponent],
  imports: [MatIconModule, MatButtonModule, CommonModule, FuncionaryRoutingModule, MatTableModule, MatDialogModule, ReactiveFormsModule, FormsModule],
})
export class FuncionaryModule {}
