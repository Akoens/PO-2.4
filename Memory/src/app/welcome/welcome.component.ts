import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  authService:AuthService

  welcome: any;
  secret: any;
  top: any;
  
  constructor(authService: AuthService) { 
    this.authService = authService;
  }

  ngOnInit(): void {
    this.authService.getWelcome().subscribe(res => {
      this.welcome = res;
    });
    this.authService.getSecret().subscribe(res => {
      this.secret = res;
    });
    this.authService.getTop().subscribe(res => {
      this.top = res;
    });
  }

}
