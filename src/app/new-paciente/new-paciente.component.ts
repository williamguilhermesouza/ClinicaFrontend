import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PacientesService from 'src/services/pacientes.service';


@Component({
  selector: 'app-new-paciente',
  templateUrl: './new-paciente.component.html',
  styleUrls: ['./new-paciente.component.css']
})
export class NewPacienteComponent implements OnInit {
  ID: number;
  nome: string;
  sexo: string;
  estadocivil: string;
  email: string;
  endereco: string;
  nascimento: string;
  profissao: string;
  telefone: string;
  peso: number;
  altura: number;
  queixa: string;
  doencaatual: string;
  doencapre: string;
  doencaassoc: string;
  historia: string;
  habitos: string;
  medicacoes: string;
  estado: string;
  pa: number;
  fc: number;
  fr: number;
  sp: number;
  observacao: string;

  constructor(
    private router: Router,
  ) {
    let state = this.router.getCurrentNavigation().extras.state;
    if (state) {
      console.log(state[0]);
      let paciente = state[0];
      this.ID = paciente.id;
      this.nome = paciente.nome;
      this.sexo = paciente.sexo;
      this.estadocivil = paciente.estadocivil;
      this.email = paciente.email;
      this.endereco = paciente.endereco;
      this.nascimento = paciente.nascimento;
      this.profissao = paciente.profissao;
      this.telefone = paciente.telefone;
      this.peso = paciente.peso;
      this.altura = paciente.altura;
      this.queixa = paciente.queixa;
      this.doencaatual = paciente.doencaatual;
      this.doencapre = paciente.doencapre;
      this.doencaassoc = paciente.doencaassoc;
      this.historia = paciente.historia;
      this.habitos = paciente.habitos;
      this.medicacoes = paciente.medicacoes;
      this.estado = paciente.estado;
      this.pa = paciente.pa;
      this.fc = paciente.fc;
      this.fr = paciente.fr;
      this.sp = paciente.sp;
      this.observacao = paciente.observacao;
    }
    
   }

  ngOnInit(): void {
    
  }

  onSubmit(form) {
    let paciente = form.value;
    PacientesService.post('/pacientes/create', paciente).then(res => console.log(res.data));
    alert(`Paciente ${paciente.nome} Cadastrado com id ${paciente.id}`);
  }
  

}
