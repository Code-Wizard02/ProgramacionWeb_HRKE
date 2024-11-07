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
import { GridListComponent } from "./grid-list/grid-list.component";
import { IconComponent } from "./icon/icon.component";
import { InputComponent } from "./input/input.component";
import { ListComponent } from "./list/list.component";
import { MenuComponent } from "./menu/menu.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ProgressSpinnerComponent } from "./progress-spinner/progress-spinner.component";
import { RadioButtonComponent } from "./radio-button/radio-button.component";
import { SelectComponent } from "./select/select.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SliderComponent } from "./slider/slider.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { SortHeaderComponent } from "./sort-header/sort-header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, BadgeComponent, ButtonComponent, ButtonToggleComponent, CardComponent, CheckBoxComponent, ChipsComponent, DatePickerComponent, DividerComponent, ExpansionPanelComponent, FormFieldComponent, GridListComponent, IconComponent, InputComponent, ListComponent, MenuComponent, PaginatorComponent, ProgressBarComponent, ProgressSpinnerComponent, RadioButtonComponent, SelectComponent, SideNavComponent, SlideToggleComponent, SliderComponent, SnackbarComponent, SortHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgramacionWeb_HRKE';
}
