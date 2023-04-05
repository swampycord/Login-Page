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

  login() {
    const emailHelpText = document.getElementsByClassName("help_email_text")as HTMLCollectionOf<HTMLElement>;

    // if (emailField.length === 0) {
    //   emailField[0].style.display = "inline";
    // }

    // if (!this.credentials.emailAddress) {
      emailHelpText[0].style.display = "block";
    // }
  }

}
