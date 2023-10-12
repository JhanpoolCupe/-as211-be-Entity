import { NgModule } from '@angular/core';
import {CommonModule, NgFor} from '@angular/common';

import { TeenagerRoutingModule } from './teenager-routing.module';
import { HomeTeenagerComponent } from './pages/home-teenager/home-teenager.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { ModalNotificationComponent } from './pages/modal-notification/modal-notification.component';
import {MatTableModule} from "@angular/material/table";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomeTeenagerComponent,
    ModalNotificationComponent
  ],
  imports: [
    CommonModule,
    TeenagerRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    FormsModule
  ]
})
export class TeenagerModule { }
