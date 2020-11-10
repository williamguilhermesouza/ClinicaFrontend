import { Injectable } from '@angular/core';
import { Paciente, PacienteAdapter } from '../models/paciente.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PacientesService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient, private adapter: PacienteAdapter) {}
    list(): Observable<Paciente[]> {
        const url = `${this.baseUrl}/pacientes`;
        return this.http.get(url).pipe(
                map((data: any[]) => data.map((item) => this.adapter.adapt(item))
                    ));
    }
}