import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllPacientesComponent} from './all-pacientes.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
      AllPacientesComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ]
})
export class AllPacientesModule { }
