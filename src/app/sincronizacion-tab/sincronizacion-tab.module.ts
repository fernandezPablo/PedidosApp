import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SincronizacionTabPageRoutingModule } from './sincronizacion-tab-routing.module';

import { SincronizacionTabPage } from './sincronizacion-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SincronizacionTabPageRoutingModule
  ],
  declarations: [SincronizacionTabPage]
})
export class SincronizacionTabPageModule {}
