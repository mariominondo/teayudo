import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlomeriaPage } from './plomeria.page';

const routes: Routes = [
  {
    path: '',
    component: PlomeriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlomeriaPageRoutingModule {}
