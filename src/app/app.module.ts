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
import { ButtonToggleModule } from './button-toggle/button-toggle.module';
import { CardModule } from './card/card.module';
import { CheckBoxModule } from './check-box/check-box.module';
import { ChipsModule } from './chips/chips.module';
import { DatePickerModule } from './date-picker/date-picker.module';


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
    ButtonToggleModule,
    CardModule,
    CheckBoxModule,
    ChipsModule,
    DatePickerModule,
    // Agrega aquí otros módulos que quieras importar
  ],
  providers: []
})
export class AppModule {}
