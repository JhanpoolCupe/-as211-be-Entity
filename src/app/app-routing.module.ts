import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from '@soa/shared/layout/containers';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'funcionary'
      },
      {
        path: 'funcionario',
        loadChildren: () => import('./funcionary/funcionary.module').then(m => m.FuncionaryModule)
      },
      {
        path: 'Teenager',
        loadChildren: () => import('./teenager/teenager.module').then(m => m.TeenagerModule)
      },
      {
        path: 'transactionalp',
        loadChildren: () => import('./transactionalp/transactionalp.module').then(m => m.TransactionalpModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
