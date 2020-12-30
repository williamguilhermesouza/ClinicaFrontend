import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatAutocompleteModule,
  ]
})
export class HomeModule { }
