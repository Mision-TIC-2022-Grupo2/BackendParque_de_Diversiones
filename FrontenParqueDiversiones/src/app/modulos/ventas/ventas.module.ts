import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { AsignarVentasComponent } from './asignar-ventas/asignar-ventas.component';


@NgModule({
  declarations: [
    AsignarVentasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
