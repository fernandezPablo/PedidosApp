import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidosTabPage } from './pedidos-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosTabPage
  },
  {
    path: 'pedido',
    loadChildren: () => import('../pedido/pedido.module').then(m => m.PedidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidosTabPageRoutingModule {}
