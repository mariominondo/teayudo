import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbanileriaPage } from './albanileria.page';

const routes: Routes = [
  {
    path: '',
    component: AlbanileriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbanileriaPageRoutingModule {}
