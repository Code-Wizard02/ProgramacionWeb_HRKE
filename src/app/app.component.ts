import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonComponent } from "./button/button.component";
import { ButtonToggleComponent } from "./button-toggle/button-toggle.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AutocompleteComponent, BadgeComponent, ButtonComponent, ButtonToggleComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProgramacionWeb_HRKE';
}
