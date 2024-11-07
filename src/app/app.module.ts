import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { BadgeModule } from './badge/badge.module';
import { ButtonModule } from './button/button.module';


@NgModule({
  declarations: [
    // Agrega aquí otros componentes si tienes
  ],
  imports: [
    BrowserModule,
    AutocompleteModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    BadgeModule,
    ButtonModule,
    // Agrega aquí otros módulos que quieras importar
  ],
  providers: []
})
export class AppModule {}