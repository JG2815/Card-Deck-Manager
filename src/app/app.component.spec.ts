import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // Setup before each test
  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents(); // Compile the components
  });

  // Test to check if the app component is created successfully
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // Test to check if the app component has the correct title
  it(`should have the 'Card-Deck-Manager' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Card-Deck-Manager');
  });

  // Test to check if the title is rendered correctly in the template
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Trigger initial data binding
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, Card-Deck-Manager');
  });
});