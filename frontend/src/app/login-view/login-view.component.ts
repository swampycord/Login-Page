import { Component, OnInit } from '@angular/core';
import { Credentials } from './credentials';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  credentials: Credentials = new Credentials("", "");

  ngOnInit(): void {
  }

  setInputFieldStatus(field: HTMLElement, helpText: HTMLElement, value: string) {
    field.style.borderColor = value ? "#aaa9a9" : "red";
    helpText.style.display = value ? "none" : "block";
  }

  login() {
    const emailField = document.getElementsByClassName("email_input_field")[0] as HTMLElement;
    const pwdField = document.getElementsByClassName("pwd_input_field")[0] as HTMLElement;
    const emailHelpText = document.getElementsByClassName("help_email_text")[0] as HTMLElement;
    const pwdHelpText = document.getElementsByClassName("help_pwd_text")[0] as HTMLElement;

    this.setInputFieldStatus(emailField, emailHelpText, this.credentials.emailAddress);
    this.setInputFieldStatus(pwdField, pwdHelpText, this.credentials.password);
  }
}
