import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PacientesService from 'src/services/pacientes.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-all-pacientes',
  templateUrl: './all-pacientes.component.html',
  styleUrls: ['./all-pacientes.component.css']
})
export class AllPacientesComponent implements OnInit {
  pacientes: Paciente[];

  setPacientes(data: any): void {
    this.pacientes = data;
  }

  pacienteDelete(id: number): void {
    PacientesService.delete(`/pacientes/${id}`);
    alert(`Paciente ${id} deletado.`);
  }

  async updatePaciente(id: number): Promise<void> {
    const res = await PacientesService.get(`/pacientes/${id}`);
    const paciente = res.data;
    this.router.navigateByUrl('/new', { state: paciente });
  }

  constructor(
    private router: Router,
  ) {
    PacientesService.get('/pacientes').then(res => {
        let data: any = res.data;
        this.setPacientes(data);
    });
   }

  ngOnInit(): void {

  }

}
