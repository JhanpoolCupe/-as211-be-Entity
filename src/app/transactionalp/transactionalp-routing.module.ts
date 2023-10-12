import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeTransactionalComponent } from './pages/home-transactional/home-transactional.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTransactionalComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionalpRoutingModule { }
