import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReparacionYServiciosInformaticosPage } from './reparacion-y-servicios-informaticos.page';

const routes: Routes = [
  {
    path: '',
    component: ReparacionYServiciosInformaticosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReparacionYServiciosInformaticosPageRoutingModule {}
