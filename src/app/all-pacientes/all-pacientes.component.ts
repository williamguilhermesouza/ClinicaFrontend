import { Component, OnInit } from '@angular/core';
import api from '../../services/api.service';

@Component({
  selector: 'app-all-pacientes',
  templateUrl: './all-pacientes.component.html',
  styleUrls: ['./all-pacientes.component.css']
})
export class AllPacientesComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    const response = await api.get('/pacientes');

  }

}
