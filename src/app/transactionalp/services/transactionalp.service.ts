import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transactional } from '../model/transactionalp';
import { environment } from '@soa/env/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TransactionalpService {

  url2 = 'http://localhost:8086'
  url3 = 'http://localhost:8086/api/asignation/programs'

  private url = `${environment.apiUrl}/api/asignation/programs`; 
  asignationSelected: Transactional | undefined = undefined;
  
  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Transactional[]>(`${this.url3}`);
  }

  registrar(datos: any) {
    return this.http.post(`${this.url2}/api/asignation/programs`, datos);
  }
}
