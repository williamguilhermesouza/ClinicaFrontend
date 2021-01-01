import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPacienteComponent} from './new-paciente.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    NewPacienteComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class NewPacienteModule { }
