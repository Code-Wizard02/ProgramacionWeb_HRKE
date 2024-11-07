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
import { DialogOverviewModule } from './dialog-overview/dialog-overview.module';
import { DividerModule } from './divider/divider.module';
import { ExpansionPanelModule } from './expansion-panel/expansion-panel.module';
import { FormFieldModule } from './form-field/form-field.module';
import { GridListModule } from './grid-list/grid-list.module';


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
    DialogOverviewModule,
    DividerModule,
    ExpansionPanelModule,
    FormFieldModule,
    GridListModule,
    // Agrega aquí otros módulos que quieras importar
  ],
  providers: []
})
export class AppModule {}
