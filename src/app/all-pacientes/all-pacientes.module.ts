import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllPacientesComponent} from './all-pacientes.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {NewPacienteModule} from '../new-paciente/new-paciente.module';
import { NewPacienteModalComponent } from './new-paciente-modal/new-paciente-modal.component';



@NgModule({
  declarations: [
      AllPacientesComponent,
      NewPacienteModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    NewPacienteModule,
  ]
})
export class AllPacientesModule { }
