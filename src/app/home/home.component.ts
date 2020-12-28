import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import PacientesService from 'src/services/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onSubmit(paciente) {
    let pacienteData;
    await PacientesService.post('/pacientes/findbyname', {nome: paciente}).then(res => {pacienteData = res.data});
    if (pacienteData[0]) {
        this.router.navigateByUrl('/new', { state: pacienteData[0]});
    } else {
        alert(`Paciente ${paciente} não encontrado!`);
    };
  }

}
