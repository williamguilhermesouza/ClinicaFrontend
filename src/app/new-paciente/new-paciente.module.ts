import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPacienteComponent} from './new-paciente.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NewPacienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class NewPacienteModule { }
