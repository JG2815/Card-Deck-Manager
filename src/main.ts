import { bootstrapApplication } from '@angular/platform-browser'; // Import bootstrapApplication for bootstrapping the Angular application
import { appConfig } from './app/app.config'; // Import the application configuration
import { AppComponent } from './app/app.component'; // Import the root component of the application

// Bootstrap the Angular application with the root component and configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err)); // Catch and log any errors during the bootstrap process
