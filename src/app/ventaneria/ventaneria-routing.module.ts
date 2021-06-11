import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaneriaPage } from './ventaneria.page';

const routes: Routes = [
  {
    path: '',
    component: VentaneriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaneriaPageRoutingModule {}
