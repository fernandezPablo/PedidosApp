import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SincronizacionTabPage } from './sincronizacion-tab.page';

const routes: Routes = [
  {
    path: '',
    component: SincronizacionTabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SincronizacionTabPageRoutingModule {}
