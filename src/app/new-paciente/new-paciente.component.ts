import { Component, OnInit } from '@angular/core';
import PacientesService from 'src/services/pacientes.service';


@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.css']
})
export class NewPacienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    let paciente = form.value;
    PacientesService.post('/pacientes/create', paciente).then(res => console.log(res.data));
    alert(`Paciente ${paciente.nome} Cadastrado com id ${paciente.id}`);
  }
  

}
