import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Paciente } from 'src/models/paciente.model';

import { PacientesService } from 'src/services/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options: string[];
  pacienteData$: Observable<Paciente[]>;

  constructor(
    private router: Router,
    private pacientesService: PacientesService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(paciente: string): void {
      this.pacienteData$ = this.pacientesService.getPacientesByName(paciente);
      this.pacienteData$.subscribe( data => {
          if (data[0]) {
              this.router.navigateByUrl('/new', { state: data[0]});
          } else {
              alert(`Paciente ${paciente} não encontrado!`);
          }
      });
  }

  onPress(paciente: string): void {
      this.pacienteData$ = this.pacientesService.getPacientes();
      this.options = [];
      this.pacienteData$.subscribe(data => {
            for (const item of data) {
                if (item.nome.includes(paciente)) {
                    this.options = [...this.options, item.nome];
                }
            }
        });
  }


}

