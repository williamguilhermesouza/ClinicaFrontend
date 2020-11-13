import { Component, OnInit } from '@angular/core';
import PacientesService from 'src/services/pacientes.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-all-pacientes',
  templateUrl: './all-pacientes.component.html',
  styleUrls: ['./all-pacientes.component.css']
})
export class AllPacientesComponent implements OnInit {
  pacientes: Paciente[];
  
  setPacientes(data) {
    this.pacientes = data;
  }

  pacienteDelete(id) {
    PacientesService.delete(`/pacientes/${id}`);
    alert(`Paciente ${id} deletado.`);
  }

  async updatePaciente(id) {
    let res = await PacientesService.get(`/pacientes/${id}`);
    let paciente = res.data;
    console.log(paciente);
  }

  constructor() {
    PacientesService.get('/pacientes').then(res => this.setPacientes(res.data));
   }

  async ngOnInit() {

  }

}
