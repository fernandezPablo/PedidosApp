import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { IonicModule } from '@ionic/angular';

import { PedidoPageRoutingModule } from './pedido-routing.module';

import { PedidoPage } from './pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScrollingModule,
    IonicModule,
    PedidoPageRoutingModule
  ],
  declarations: [PedidoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class PedidoPageModule {}
