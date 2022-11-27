import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { CrearComprasComponent } from './compras/crear-compras/crear-compras.component';
import { BuscarComprasComponent } from './compras/buscar-compras/buscar-compras.component';
import { EditarComprasComponent } from './compras/editar-compras/editar-compras.component';
import { EliminarComprasComponent } from './compras/eliminar-compras/eliminar-compras.component';

const routes: Routes = [
  {
    path: "buscar-usuario",
    component: BuscarUsuarioComponent
  },
  {
    path: "crear-usuario",
    component: CrearUsuarioComponent
  },
  
  {
    path: "editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path: 'crear-compras',
    component: CrearComprasComponent
  },
  {
    path: 'listar-compras',
    component: BuscarComprasComponent
  },
  {
    path: 'editar-compra/:id',
    component: EditarComprasComponent
  },
  {
    path: 'eliminar-compra/:id',
    component: EliminarComprasComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
