import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacientesService } from 'src/services/pacientes.service';
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
//    PacientesService.delete(`/pacientes/${id}`);
    alert(`Paciente ${id} deletado.`);
  }

  async updatePaciente(id: number): Promise<void> {
//    const res = await PacientesService.get(`/pacientes/${id}`);
//    const paciente = res.data;
//    this.router.navigateByUrl('/new', { state: paciente });
  }

  constructor(
    private router: Router,
  ) {
  //  PacientesService.get('/pacientes').then(res => {
  //      const pacientes: any = res.data;
  //      for (const paciente of pacientes) {
  //          const nascimento = new Date(paciente.nascimento);
  //          paciente.nascimento = `${nascimento.getDate() + 1}/${nascimento.getMonth() + 1}/${nascimento.getFullYear()}`;
  //      }
  //      this.setPacientes(pacientes);
  //  });
   }

  ngOnInit(): void {

  }

}
