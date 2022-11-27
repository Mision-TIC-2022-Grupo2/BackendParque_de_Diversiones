import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModeloAtracciones } from 'src/app/modelos/atracciones.modelo';
import { AtraccionesService } from 'src/app/servicios/atracciones.service';
@Component({
  selector: 'app-buscar-compras',
  templateUrl: './buscar-compras.component.html',
  styleUrls: ['./buscar-compras.component.css']
})
export class BuscarComprasComponent implements OnInit {

  listadoRegistros: ModeloAtracciones[]=[];
  constructor(private atraccionesServicio: AtraccionesService) { }
  ngOnInit(): void {
    this.ObtenerListadoProducto();
  }
ObtenerListadoProducto(){
  this.atraccionesServicio.ObtenerRegistros().subscribe((datos: ModeloAtracciones[])=>{
    this.listadoRegistros=datos;
  })
}

}
