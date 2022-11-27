import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ModeloAtracciones } from 'src/app/modelos/atracciones.modelo'; 
import { AtraccionesService } from 'src/app/servicios/atracciones.service';

@Component({
  selector: 'app-crear-compras',
  templateUrl: './crear-compras.component.html',
  styleUrls: ['./crear-compras.component.css']
})
export class CrearComprasComponent implements OnInit {
  fgValidador: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'imagen': ['', [Validators.required]],
    'estatuta_min': ['', [Validators.required]],
    'video': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder,
    private servicioCompras: AtraccionesService,
    private router: Router) { }


  ngOnInit(): void {
  }
  //Crear método guardar producto
  GuardarProducto() {
    let nombre = this.fgValidador.controls["nombre"].value;
    let imagen = this.fgValidador.controls["imagen"].value;
    let estatura_min = parseInt(this.fgValidador.controls["estatura_min"].value);
    let video = this.fgValidador.controls["video"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let p = new ModeloAtracciones();
    p.nombre = nombre;
    p.imagen = imagen;
    p.estatura_min = estatura_min;
    p.video = video;
    p.descripcion = descripcion;
    this.servicioCompras.CrearAtraccion(p).subscribe((datos: ModeloAtracciones) => {
      alert("Atraccion Registrado Correctamente");
      this.router.navigate(["/administracion/listar-compras"])
    }, (error: any) => {
      alert("Error en el registro de la Atraccion");
    })
  }
  


}
