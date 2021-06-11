import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineaBlancaReparacionPage } from './linea-blanca-reparacion.page';

const routes: Routes = [
  {
    path: '',
    component: LineaBlancaReparacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineaBlancaReparacionPageRoutingModule {}
