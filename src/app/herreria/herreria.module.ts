import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerreriaPageRoutingModule } from './herreria-routing.module';

import { HerreriaPage } from './herreria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerreriaPageRoutingModule
  ],
  declarations: [HerreriaPage]
})
export class HerreriaPageModule {}
