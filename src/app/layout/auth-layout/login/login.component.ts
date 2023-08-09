import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) {
    //login form
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(Constants.emailRegExp),
        ],
      ],
      password: ['', [Validators.required]],
    });
  }

  //get validators
  get validators() {
    return this.loginForm.controls;
  }

  //login
  login() {
    this.toastr.clear();
    this.submitted = true;
    if (this.loginForm.valid) {
      if (this.loginForm.value.email === 'piyush.deogirkar@bluebenz.com' && this.loginForm.value.password === 'Admin@123') {
        sessionStorage.setItem('isLoggedIn', 'true');
        this.toastr.success('Login successful!');
        this.router.navigate(['/home']);
      }
      else {
        this.toastr.error('Invalid Credentials!');
      }
    }
  }

}
