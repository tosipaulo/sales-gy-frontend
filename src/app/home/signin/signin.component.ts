import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { PlatformDetectorService } from './../../core/platform-detector/platform-detector.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userEmailInput') userEmailInput: ElementRef<HTMLInputElement>

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
    ) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })

  }

  login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.auth
      .authenticate(email, password)
      .subscribe(
        (response) => {
          this.router.navigate(['sales'])
        },
        err => {
          console.log(err.error);
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() && this.userEmailInput.nativeElement.focus()
        }
      )

  }

}
