import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';

import { HomeModule } from './home/home.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './shared/auth.service';
import { AuthGuard } from './guard/auth.guard'
import { TokenInterceptorService } from './shared/token-interceptor.service'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HomeModule
  ],
  providers: [AuthService, AuthGuard, 
    {provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptorService, 
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
