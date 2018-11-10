import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService
    ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })

  }

  login() {
    const email = '';
    const password = '';

    this.auth
      .authenticate(email, password)
      .subscribe(
        (response) => {

        },
        err => {
          console.log(err.error);
          this.loginForm.reset();
        }
      )

  }

}
