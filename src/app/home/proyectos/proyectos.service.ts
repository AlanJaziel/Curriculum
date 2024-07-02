import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  private apiUrl = 'http://localhost:3000/api/proyectos';

  constructor(private http: HttpClient) { }

  crearProyecto(proyecto: any): Observable<any> {
    return this.http.post(this.apiUrl, proyecto);
  }
}