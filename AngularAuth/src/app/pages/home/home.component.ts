import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
token!:any;
  constructor(private authService: AuthService) {
    this.token = sessionStorage.getItem('myapp_token');

  }
 


}
