import { Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import { MemoryService } from './memory/memory.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {

  constructor(private memory: MemoryService, private authService:AuthService, private router:Router) {
   }

  ngOnInit(): void{
    this.authService.getSecret()
    .subscribe(
      res => {},
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status != 200){
            this.router.navigate(['/login'])
          }
        }
      }
    );
  }

  newGame(){
    this.memory.newGame();
  }
}
