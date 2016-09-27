import { ViewChild, Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'userProfile',
    template: require('./userProfile.component.html')
})

export class UserProfileComponent implements OnInit, AfterViewInit {
    @ViewChild('formRef') form: NgForm;

    public username: string;
    public opportunityInterests: string[];
    public securityMethods: string[];

    constructor() {
        this.username = "John";
        this.opportunityInterests = ['Volunteer', 'Donate'];
        this.securityMethods = ['Two Factor Authentication', 'Client Key'];
    }

    ngOnInit() {

    }

    onSubmit(profileForm: NgForm) {
        console.log(profileForm);
    }

    ngAfterViewInit() {
        Observable
            .combineLatest(
                this.form.statusChanges,
                this.form.valueChanges,
                (status: string, value: Object) => ({ status, value }))
            .filter(({status}) => status === 'VALID')
            .subscribe(({value}) => console.table(value));
    }
}