import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearComprasComponent } from './compras/crear-compras/crear-compras.component';
import { EditarComprasComponent } from './compras/editar-compras/editar-compras.component';
import { BuscarComprasComponent } from './compras/buscar-compras/buscar-compras.component';
import { EliminarComprasComponent } from './compras/eliminar-compras/eliminar-compras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    BuscarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearComprasComponent,
    EditarComprasComponent,
    BuscarComprasComponent,
    EliminarComprasComponent
   
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
