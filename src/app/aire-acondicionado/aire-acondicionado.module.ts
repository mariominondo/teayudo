import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AireAcondicionadoPageRoutingModule } from './aire-acondicionado-routing.module';

import { AireAcondicionadoPage } from './aire-acondicionado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AireAcondicionadoPageRoutingModule
  ],
  declarations: [AireAcondicionadoPage]
})
export class AireAcondicionadoPageModule {}
