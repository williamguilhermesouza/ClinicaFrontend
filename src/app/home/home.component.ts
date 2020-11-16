import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import PacientesService from 'src/services/pacientes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(paciente) {
    PacientesService.post('/pacientes/findbyname', {nome: paciente}).then(res => console.log(res.data));
    this.router.navigate(['new']);
  }

}
