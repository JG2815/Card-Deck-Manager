import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeckComponent } from './deck/deck.component';
import { MatDialogModule } from '@angular/material/dialog';

// Define the root component of the application
@Component({
  selector: 'app-root', // The selector used to identify this component in a template
  standalone: true, // Indicates that this component is a standalone component
  imports: [RouterOutlet, DeckComponent, MatDialogModule], // Modules and components to import
  templateUrl: './app.component.html', // Path to the component's template file
  styleUrls: ['./app.component.css'] // Path to the component's CSS file
})
export class AppComponent {
  title = 'Card-Deck-Manager'; // Title property of the component
}


