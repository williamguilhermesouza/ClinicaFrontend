import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewPacienteComponent } from './new-paciente/new-paciente.component';
import { AllPacientesComponent } from './all-pacientes/all-pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewPacienteComponent,
    AllPacientesComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent },
      {path: 'new', component: NewPacienteComponent },
      {path: 'all', component: AllPacientesComponent },
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
