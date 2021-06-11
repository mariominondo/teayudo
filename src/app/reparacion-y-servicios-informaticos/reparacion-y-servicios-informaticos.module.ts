import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReparacionYServiciosInformaticosPageRoutingModule } from './reparacion-y-servicios-informaticos-routing.module';

import { ReparacionYServiciosInformaticosPage } from './reparacion-y-servicios-informaticos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReparacionYServiciosInformaticosPageRoutingModule
  ],
  declarations: [ReparacionYServiciosInformaticosPage]
})
export class ReparacionYServiciosInformaticosPageModule {}
