import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidosTabPageRoutingModule } from './pedidos-tab-routing.module';

import { PedidosTabPage } from './pedidos-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidosTabPageRoutingModule,
    
  ],
  declarations: [PedidosTabPage]
})
export class PedidosTabPageModule {}
