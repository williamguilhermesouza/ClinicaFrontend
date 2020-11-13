import { Component, OnInit } from '@angular/core';
import PacientesService from 'src/services/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(paciente) {
    PacientesService.post('/pacientes/searchbyname', {nome: paciente}).then(res => console.log(res));
  }

}
