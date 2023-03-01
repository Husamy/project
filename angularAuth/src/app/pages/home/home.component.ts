import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { MatSort } from '@angular/material/sort';

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
displayedColumns: string[] = ['id', 'action', 'email', 'created_date', 'created_time'];
dataSource = new MatTableDataSource<any>();
@ViewChild(MatSort) sort!: MatSort;

  constructor(private auth: AuthService,private http : HttpClient) {
    this.token = sessionStorage.getItem('myapp_token');

  }

  ngOnInit() {
    this.http.get<User[]>('http://10.1.1.44:8000/api/get').subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.sort = this.sort;
    });

  }
}
