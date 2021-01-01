import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { PacientesService } from 'src/services/pacientes.service';
import { Paciente } from '../../models/paciente.model';
import {NewPacienteComponent} from '../new-paciente/new-paciente.component';

@Component({
  selector: 'app-all-pacientes',
  templateUrl: './all-pacientes.component.html',
  styleUrls: ['./all-pacientes.component.css']
})
export class AllPacientesComponent implements OnInit {
  pacientes$: Observable<Paciente[]>;


  pacienteDelete(id: number): void {
    this.pacientesService.deletePaciente(id);
    alert(`Paciente ${id} deletado.`);
  }

  updatePaciente(id: number): void {
    this.pacientesService.updatePaciente(id).subscribe( paciente => {
        const date = new Date(paciente.nascimento);
        paciente.nascimento = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        // this.router.navigateByUrl('/new', {state: paciente });
        const dialogRef = this.dialog.open( NewPacienteComponent, {
            width: '1000px',
        });
    });
  }

  constructor(
    private router: Router,
    private pacientesService: PacientesService,
    public dialog: MatDialog,
  ) { this.pacientes$ = this.pacientesService.getPacientes(); }

  ngOnInit(): void {

  }

}
