import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAtracciones } from '../modelos/atracciones.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AtraccionesService {
  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros(): Observable<ModeloAtracciones[]> {
    return this.http.get<ModeloAtracciones[]>(`${this.url}/atracciones`,)
  }

  CrearAtraccion(atracciones: ModeloAtracciones): Observable<ModeloAtracciones> {
    return this.http.post<ModeloAtracciones>(`${this.url}/atracciones`, atracciones, {
      headers: new HttpHeaders({
        'Autorization': `Bear ${this.token}` // se declara el token en el constructor
      })
    })
  }
  ActualizarAtraccion(atracciones: ModeloAtracciones): Observable<ModeloAtracciones> {
    return this.http.put<ModeloAtracciones>(`${this.url}/atracciones`, atracciones, {
      headers: new HttpHeaders({
        'Autorization': `Bear ${this.token}`
      })
    })
  }
  EliminarAtraccion(id: string): Observable<any> {
    return this.http.delete(`${this.url}/atracciones/${id}`, {
      headers: new HttpHeaders({
        'Autorization': `Bear ${this.token}`
      })
    })
  }
}