import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbanileriaPageRoutingModule } from './albanileria-routing.module';

import { AlbanileriaPage } from './albanileria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbanileriaPageRoutingModule
  ],
  declarations: [AlbanileriaPage]
})
export class AlbanileriaPageModule {}
