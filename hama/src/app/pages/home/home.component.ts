import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';

export interface User {
  name: string;
  email: string;
  phone: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
token!:any;
dataSource!: MatTableDataSource<User>;

  constructor(private auth: AuthService,private http : HttpClient) {
    this.token = sessionStorage.getItem('myapp_token');

  }

  ngOnInit() {
    this.http.get<User[]>('https://example.com/api/users').subscribe(data => {
      this.dataSource = new MatTableDataSource<User>(data);
    });

  }
}
