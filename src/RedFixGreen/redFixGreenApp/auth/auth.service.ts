import {Injectable} from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { tdsAuthConfig } from './auth.config';

let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService {
    private tokenStorageKey: string = 'id_token';
    private userProfileStorageKey: string = 'user_profile';
    private storage: Storage;
    private auth0Lock: Auth0LockStatic;
    private auth0UserProfile: Auth0UserProfile;
    private auth0ParsedToken: Object;

    constructor() {
        this.storage = sessionStorage;

        // Configure Auth0
        this.auth0Lock = new Auth0Lock(tdsAuthConfig.clientId, tdsAuthConfig.domain, {});

        // Add callback for lock `authenticated` event
        this.auth0Lock.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.fetchAuth0LockUserMetadata(authResult.idToken);
        });
    }

    public auth0LockInAppLogin(username: string, password: string): void {
        // Call the show method to display the widget.
        this.auth0Lock.show();
    }

    public auth0LockInAppLogout(): void {
        // Remove token from localStorage
        localStorage.removeItem(this.tokenStorageKey);
        localStorage.removeItem(this.userProfileStorageKey);
    };

    public isAuthenticated(): boolean {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    private fetchAuth0LockUserMetadata(idToken: string): void {
        this.auth0Lock.getProfile(idToken, (err: any, profile: Auth0UserProfile) => {
            if (err) {
                return console.log('There was an error getting the profile: ' + err.message);
            }
            localStorage.setItem(this.userProfileStorageKey, JSON.stringify(profile));
            this.auth0UserProfile = profile;
        });
    }

    private decodeBase64Url(str: string) {
        let output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Invalid base64url string!';
        }

        return window.atob(output);
    }

    private parseJsonWebToken(token: string) {
        if (typeof token !== 'undefined' && token !== null) {
            return JSON.parse(this.decodeBase64Url(token.split('.')[1]));
        }

        return {};
    }
}