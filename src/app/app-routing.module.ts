import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/covid-list/covid-list.module').then(m => m.CovidListModule)
  },
  {
    path: 'covid',
    loadChildren: () => import('./pages/covid-list/covid-list.module').then(m => m.CovidListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
