import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PacientesService } from 'src/services/pacientes.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-all-pacientes',
  templateUrl: './all-pacientes.component.html',
  styleUrls: ['./all-pacientes.component.css']
})
export class AllPacientesComponent implements OnInit {
  pacientes: Observable<Paciente[]>;

  constructor(private pacientesService: PacientesService) {
    this.pacientes = this.pacientesService.getAll();
   }

  async ngOnInit() {

  }

}
