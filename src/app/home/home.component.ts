import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import PacientesService from 'src/services/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options: string[] = [];

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(paciente: string): Promise<any> {
      let pacienteData: any;
      await PacientesService.post('/pacientes/findbyname', {nome: paciente}).then(res => {pacienteData = res.data; });
      if (pacienteData[0]) {
          this.router.navigateByUrl('/new', { state: pacienteData[0]});
      } else {
          alert(`Paciente ${paciente} não encontrado!`);
      }
  }

  async onPress(paciente: string): Promise<any> {
      let pacienteData: any;
      await PacientesService.get('/pacientes').then(res => {pacienteData = res.data; });
      this.options = [];
      if (pacienteData) {
          for (let i = 0; i <= pacienteData.length; i++) {
              if (pacienteData[i]) {
                  if (pacienteData[i].nome.includes(paciente)) {
                    this.options = [...this.options, pacienteData[i].nome];
                  }
              }
          }
      }
   }


}

