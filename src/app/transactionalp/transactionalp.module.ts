import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HomeTransactionalComponent } from './pages/home-transactional/home-transactional.component';
import { TransactionalpListComponent } from './components/transactionalp-list/transactionalp-list.component';
import { TransactionalpRoutingModule } from './transactionalp-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TransactionalpFormComponent } from './components/transactionalp-form/transactionalp-form.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [HomeTransactionalComponent, TransactionalpListComponent, TransactionalpFormComponent],
  imports: [MatIconModule,CommonModule, MatDialogModule, MatTableModule, ReactiveFormsModule, FormsModule,TransactionalpRoutingModule,MatFormFieldModule,MatSelectModule]
})
export class TransactionalpModule { }
