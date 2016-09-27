import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
    selector: 'my-app',
    template: require('./app.component.html')
})


export class AppComponent {

    constructor(private router: Router, private auth: AuthService) {
    }
}