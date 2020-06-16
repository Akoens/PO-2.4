import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'JWTMemory';
  authService:AuthService;

  constructor(authService:AuthService){
    this.authService = authService;
  }
}
