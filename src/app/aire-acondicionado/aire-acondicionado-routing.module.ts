import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AireAcondicionadoPage } from './aire-acondicionado.page';

const routes: Routes = [
  {
    path: '',
    component: AireAcondicionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AireAcondicionadoPageRoutingModule {}
