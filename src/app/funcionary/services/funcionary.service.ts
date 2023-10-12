import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@soa/env/environment.development';
import { Funcionary } from '../model/funcionary.model';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class FuncionaryService {
  private url = `${environment.apiUrl}/v1/entidad`;
  entidadSelected: Funcionary | undefined= undefined;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Funcionary[]>(this.url);
  }

  create(body: Funcionary) {
    return this.http.post(this.url, body);
  }
  update(entidad: Funcionary): Observable<Funcionary> {
    const updateUrl = `${this.url}/${entidad.id}`; // Asegúrate de que entidad.id sea el identificador correcto

    return this.http.put<Funcionary>(updateUrl, entidad);
  }
  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
  activarEntidad(id: string): Observable<any> {
    const url = `${this.url}/${id}/activar`;
    return this.http.put(url, null);
  }
}
