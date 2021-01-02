import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Paciente} from 'src/models/paciente.model';
import {AllPacientesComponent} from '../all-pacientes.component';

@Component({
  selector: 'app-new-paciente-modal',
  templateUrl: './new-paciente-modal.component.html',
  styleUrls: ['./new-paciente-modal.component.css']
})
export class NewPacienteModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AllPacientesComponent>,
    @Inject(MAT_DIALOG_DATA) public state: Paciente,
  ) { }

  ngOnInit(): void {
      console.log(this.state);
  }

  onClose(): void {
      this.dialogRef.close();
  }

}
