/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app/material/material.module';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { AuthService } from './app/service/auth.service';
import { AuthGuard } from './app/service/auth.guard';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule, MaterialModule, CommonModule, AuthService, AuthGuard,NgbModule )
  ]
});