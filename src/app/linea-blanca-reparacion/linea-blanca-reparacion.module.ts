import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineaBlancaReparacionPageRoutingModule } from './linea-blanca-reparacion-routing.module';

import { LineaBlancaReparacionPage } from './linea-blanca-reparacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineaBlancaReparacionPageRoutingModule
  ],
  declarations: [LineaBlancaReparacionPage]
})
export class LineaBlancaReparacionPageModule {}
