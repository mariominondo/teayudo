import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlomeriaPageRoutingModule } from './plomeria-routing.module';

import { PlomeriaPage } from './plomeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlomeriaPageRoutingModule
  ],
  declarations: [PlomeriaPage]
})
export class PlomeriaPageModule {}
