import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/apiserve/services.service';
import { AuthService } from '../services/authoServices/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(    private ourService:ServicesService,
    private authService:AuthService
    ) { }

  ngOnInit(): void {

  }

  bgcolor(){
    return this.ourService.mood;

  }

  isLogin(){
    return this.authService.isLoggedIn
  }
}
