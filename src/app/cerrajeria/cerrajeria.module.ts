import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CerrajeriaPageRoutingModule } from './cerrajeria-routing.module';

import { CerrajeriaPage } from './cerrajeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CerrajeriaPageRoutingModule
  ],
  declarations: [CerrajeriaPage]
})
export class CerrajeriaPageModule {}
