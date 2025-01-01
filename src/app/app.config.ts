import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Define the application configuration
export const appConfig: ApplicationConfig = {
  providers: [
    // Enable zone change detection with event coalescing
    provideZoneChangeDetection({ eventCoalescing: true }),
    // Provide the router configuration
    provideRouter(routes),
    // Provide asynchronous animations
    provideAnimationsAsync()
  ]
};
