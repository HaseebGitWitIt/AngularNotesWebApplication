import { Component } from '@angular/core';
import { FormFieldTypes } from '@aws-amplify/ui-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formFields: FormFieldTypes;

  constructor() {
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
  }

}
