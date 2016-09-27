import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './users/userProfile.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
    imports: [
        BrowserModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        UserProfileComponent
    ],
    providers: [
        Configuration,
        AUTH_PROVIDERS,
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }