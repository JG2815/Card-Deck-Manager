import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeckComponent } from './deck/deck.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeckComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Card-Deck-Manager';
}
