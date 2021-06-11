import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CerrajeriaPage } from './cerrajeria.page';

const routes: Routes = [
  {
    path: '',
    component: CerrajeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CerrajeriaPageRoutingModule {}
