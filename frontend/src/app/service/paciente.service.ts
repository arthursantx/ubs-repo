import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private apiUrl = 'http://localhost:8080/api/pacientes';  // URL da API do backend

  constructor(private http: HttpClient) { }

  // Método para gravar os dados no banco
  gravar(paciente: Paciente): Observable<any> {
    return this.http.post(this.apiUrl, paciente);
  }
}
