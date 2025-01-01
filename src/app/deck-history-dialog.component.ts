import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-deck-history-dialog', // The selector used to identify this component in a template
  templateUrl: './deck-history-dialog.component.html', // Path to the component's template file
  styleUrls: ['./deck-history-dialog.component.css'], // Path to the component's CSS file
  standalone: true, // Indicates that this component is a standalone component
  imports: [CommonModule], // Modules to import
  providers: [DatePipe] // Providers for the component
})
export class DeckHistoryDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {} // Inject data passed to the dialog
}