/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
// import { AuthService } from './app/service/auth.service';
// import { AuthGuard } from './app/service/auth.guard';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './app/services/auth.guard';
import { AuthService } from './app/services/auth.service';
import { MaterialModule } from './app/materials/material.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserAnimationsModule, 
      MaterialModule,
      CommonModule,
      AuthService,
      AuthGuard,
      NgbModule,
      FormsModule ,
      HttpClientModule)
  ]
});