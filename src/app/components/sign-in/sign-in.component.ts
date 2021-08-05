import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../component/services/authoServices/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  errors: string[] = [];
  constructor( public authService: AuthService) { }

  ngOnInit(): void {
  }

  
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  
  login() {
    if (this.loginForm.invalid) {
      if (this.email?.invalid) this.errors.push('Email Is Invalid');
      if (this.password?.invalid) this.errors.push('Password Is Invalid');
      return;
    } else {
      let dataForm = this.loginForm.value;

      return this.authService
        .SignIn(dataForm)
        .catch((err: { message: string; }) => this.errors.push(err.message));
    }
  }

}
