import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Paciente } from '../models/paciente.model';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PacientesService {
    private baseUrl = 'http://localhost:3000';

    constructor(private http: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    
    getAll(): Observable<Paciente[]> {
        const url = `${this.baseUrl}/pacientes`;
        const res = this.http.get<Paciente[]>(url)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
        return res;

    }

    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Codigo do erro ${error.status},` + `mensagem ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}