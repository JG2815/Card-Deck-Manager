import { TestBed } from '@angular/core/testing'; // Import TestBed for configuring and initializing the environment for unit testing
import { DeckService } from './deck.service'; // Import the DeckService to be tested

describe('DeckService', () => {
  let service: DeckService; // Declare a variable to hold the instance of DeckService

  // Setup before each test
  beforeEach(() => {
    // Configure the testing module
    TestBed.configureTestingModule({});
    // Inject the DeckService into the test environment
    service = TestBed.inject(DeckService);
  });

  // Test to check if the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy(); // Assert that the service instance is truthy, meaning it was created successfully
  });
});
