import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NewPacienteComponent } from './new-paciente/new-paciente.component';
import { AllPacientesComponent } from './all-pacientes/all-pacientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeModule} from './home/home.module';
import {AllPacientesModule} from './all-pacientes/all-pacientes.module';
import {NewPacienteModule} from './new-paciente/new-paciente.module';



@NgModule({
   declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    AllPacientesModule,
    NewPacienteModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'new', component: NewPacienteComponent },
    { path: 'all', component: AllPacientesComponent },
], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
