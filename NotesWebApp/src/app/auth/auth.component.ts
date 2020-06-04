import { Component, OnInit } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  formFields: FormFieldTypes;

  constructor(public amplifyService: AmplifyService, public router: Router) {
    this.formFields = [
      {
        type: "email",
        label: "Enter your email",
        placeholder: "Your email",
        required: true,
      }, {
        type: "name",
        label: "Enter your name",
        placeholder: "Your name",
        required: true,
      },
      {
        type: "password",
        label: "Enter your password",
        placeholder: "Your password",
        required: true,
      }
    ];

    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn') {
          this.router.navigate(['/notes']);
        }
      });
  }

  ngOnInit(): void {
  }

}
