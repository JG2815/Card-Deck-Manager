import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DeckService, Card } from '../deck.service';
import { DeckHistoryDialogComponent } from '../deck-history-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatCardModule, MatButtonModule, FormsModule, MatDialogModule, FlexLayoutModule],
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100%)' }),
        animate('500ms', keyframes([
          style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
        ]))
      ])
    ]),
    trigger('shuffleAnimation', [
      transition(':enter', [
        animate('2000ms', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 0.25 }),
          style({ opacity: 1, offset: 0.75 }),
          style({ opacity: 0, offset: 1 })
        ]))
      ])
    ])
  ]
})
export class DeckComponent implements OnInit {
  dealtCards: Card[] = [];
  remainingDeckSize = 0;
  dealcount: number = 0;
  isShuffling = false;

  constructor(private deckService: DeckService, private dialog: MatDialog) {}

  ngOnInit() {
    this.loadDeckState();
  }

   // Load the current state of the deck from Firestore
  async loadDeckState() {
    await this.deckService.getDeckState();
    this.dealtCards = await this.deckService.dealCards(this.dealcount);
    this.remainingDeckSize = this.deckService.getRemainingDeck().length;
  }

// Shuffle the deck and update the state
  async shuffleDeck() {
    this.isShuffling = true;
    this.deckService.shuffleDeck();
    this.updateDeckSize();
    setTimeout(() => {
      this.isShuffling = false;
    }, 2000); // Wait for the animation to finish
  }

   // Deal a specified number of cards and update the state
async dealCards(count: number) {
  if (count > this.remainingDeckSize) {
    alert('Not enough cards left in the deck');
    return;
  }
  const dealtCards = await this.deckService.dealCards(count);
  this.dealtCards.push(...dealtCards);
  this.dealcount = count;
  this.updateDeckSize();
}

 // Reset the deck to its initial state and update the state
async resetDeck() {
  await this.deckService.resetDeck();
  this.dealtCards = [];
  this.dealcount = 0;
  this.updateDeckSize();
}

// Update the remaining deck size
private updateDeckSize() {
  this.remainingDeckSize = this.deckService.getRemainingDeck().length;
  }

  // Open the dialog to view the dealt cards history
  async openHistoryDialog() {
    const history = await this.deckService.getDealtCardsHistory();
    this.dialog.open(DeckHistoryDialogComponent, {
      data: { history },
      width: '80%',
      maxWidth: '600px'
    });
  }
}
