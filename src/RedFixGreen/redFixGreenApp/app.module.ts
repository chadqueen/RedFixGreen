import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './users/userProfile.component';

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
        Configuration
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }