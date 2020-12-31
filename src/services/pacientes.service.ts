import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private readonly Backend = `${environment.Backend}`;

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
      return this.http.get<Paciente[]>(`${this.Backend}pacientes`);
  }

  getPacientesByName(paciente: string): Observable<Paciente[]> {
      return this.http.post<Paciente[]>(`${this.Backend}pacientes/findbyname`, {nome: paciente});
  }

  createPaciente(paciente: Paciente): Observable<Paciente> {
      return this.http.post<Paciente>(`${this.Backend}pacientes/create`, paciente);
  }

  deletePaciente(id: number): void {
      this.http.delete(`${this.Backend}pacientes/${id}`).subscribe(data => console.log(data));
  }

  updatePaciente(id: number): Observable<Paciente> {
      return this.http.get<Paciente>(`${this.Backend}pacientes/${id}`);
  }
}

