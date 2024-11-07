import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonComponent } from "./button/button.component";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { CardComponent } from "./card/card.component";
import { CheckBoxComponent } from "./check-box/check-box.component";
import { ChipsComponent } from "./chips/chips.component";
import { DatePickerComponent } from "./date-picker/date-picker.component";
import { DividerComponent } from "./divider/divider.component";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { FormFieldComponent } from "./form-field/form-field.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, BadgeComponent, ButtonComponent, ButtonToggleComponent, CardComponent, CheckBoxComponent, ChipsComponent, DatePickerComponent, DividerComponent, ExpansionPanelComponent, FormFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgramacionWeb_HRKE';
}
