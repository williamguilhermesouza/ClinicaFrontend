import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  private readonly Backend = `${environment.Backend}`;

  constructor() { }
}
