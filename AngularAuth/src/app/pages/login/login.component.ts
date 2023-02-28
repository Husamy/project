import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  data : any ; 
  private readonly TOKEN_KEY = 'myapp_token';
    constructor(private formBuilder: FormBuilder, private auth  : AuthService,private snackBar : MatSnackBar , private router : Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  
  onSubmit() {
    if (this.loginForm.valid) {
      const data = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };
      this.auth.loginfn(data).subscribe(
        response => {
          const token = response.access;
          if (token) {
            sessionStorage.setItem(this.TOKEN_KEY, token);
          }
          this.snackBar.open('Logged in successfully!', 'Close', {
            duration: 2000
          });
          // Navigate to another component
          this.router.navigate(['/dashboard']);
        },
        error => {
          let errorMessage = 'An error occurred!';
          if (error.error && error.error.error) {
            errorMessage = error.error.error;
          }
          this.snackBar.open(errorMessage, 'Close', {
            duration: 2000,
          });
        }
      );
    }
  }

    
      onCancel() {
        this.loginForm.reset();
      }

    }