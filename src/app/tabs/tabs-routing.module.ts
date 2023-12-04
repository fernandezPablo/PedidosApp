import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tabs/pedidos-tab',
  },
  {

    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pedidos-tab',
        loadChildren: () => import('../pedidos-tab/pedidos-tab.module').then(m => m.PedidosTabPageModule)
      },
      {
        path: 'sincronizacion-tab',
        loadChildren: () => import('../sincronizacion-tab/sincronizacion-tab.module').then(m => m.SincronizacionTabPageModule)
      },
      {
        path: 'menu-tab',
        loadChildren: () => import('../menu-tab/menu-tab.module').then(m => m.MenuTabPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
