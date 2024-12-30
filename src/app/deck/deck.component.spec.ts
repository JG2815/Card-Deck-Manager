import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeckComponent } from './deck.component';

describe('DeckComponent', () => {
  let component: DeckComponent;
  let fixture: ComponentFixture<DeckComponent>;

  // Setup before each test
  beforeEach(async () => {
    // Configure the testing module
    await TestBed.configureTestingModule({
      imports: [DeckComponent]
    })
    .compileComponents(); // Compile the components

    // Create the component fixture
    fixture = TestBed.createComponent(DeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  // Test to check if the component is created successfully
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
