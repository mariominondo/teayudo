import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaneriaPageRoutingModule } from './ventaneria-routing.module';

import { VentaneriaPage } from './ventaneria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaneriaPageRoutingModule
  ],
  declarations: [VentaneriaPage]
})
export class VentaneriaPageModule {}
