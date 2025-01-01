import { Injectable } from '@angular/core';
import { Firestore, collection, doc, setDoc, getDoc, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';

// This is the card interface (the rank of the card and the suit of the card)
export interface Card {
  rank: string;
  suit: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeckService {
private ranks = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' ];
private suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
private deck: Card[] = [];
private dealtCards: Card[] = [];
private deskCollection = collection(db, 'decks');
private deckDoc = doc(this.deskCollection, 'currentDeck');
private historyCollection = collection(db, 'dealtCardsHistory');

  
constructor() { 
  this.resetDeck(); // This will initialize the deck
}

 // Reset the deck to its initial state
async resetDeck() {
  this.deck = [];
  this.dealtCards = [];
  for (let rank of this.ranks) {
    for (let suit of this.suits) {
      this.deck.push({rank, suit});
    }
  }
  await this.saveDeckState();
}

// This function will shuffle the deck
async shuffleDeck() {
  for (let i = this.deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
  }
  await this.saveDeckState();
}

// This function will deal a card from the deck
async dealCards(count: number): Promise<Card[]> {
  const dealt = this.deck.splice(0, count);
  this.dealtCards.push(...dealt);
  await this.saveDeckState();
  await this.saveDealtCardsHistory(dealt);
  return dealt;
}

// This function will get the remaining cards in the deck
getRemainingDeck() {
  return this.deck;
  }

  // Save the current state of the deck to Firestore
  private async saveDeckState() {
    const deckState = {
      deck: this.deck,
      dealtCards: this.dealtCards
    };
    try {
      await setDoc(this.deckDoc, deckState);
      console.log('Deck state saved successfully');
    } catch (e) {
      console.error('Error saving deck state: ', e);
    }
  }

  // Retrieve the stored deck state from Firestore
  async getDeckState() {
    try {
      const docSnap = await getDoc(this.deckDoc);
      if (docSnap.exists()) {
        const data = docSnap.data();
        this.deck = data['deck'] || [];
        this.dealtCards = data['dealtCards'] || [];
        console.log('Deck state loaded successfully');
      } else {
        console.log('No such document!');
      }
    } catch (e) {
      console.error('Error getting deck state: ', e);
    }
  }

 // Save dealt cards history to Firestore
 private async saveDealtCardsHistory(dealtCards: Card[]) {
  try {
    await addDoc(this.historyCollection, { dealtCards, timestamp: new Date() });
    console.log('Dealt cards history saved successfully');
  } catch (e) {
    console.error('Error saving dealt cards history: ', e);
  }
}


// Retrieve dealt cards history from Firestore
async getDealtCardsHistory() {
  try {
    const querySnapshot = await getDocs(this.historyCollection);
    const history = querySnapshot.docs.map(doc => doc.data());
    return history;
  } catch (e) {
    console.error('Error getting dealt cards history: ', e);
    return [];
    }
  }
}