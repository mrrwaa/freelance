import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { Err404Component } from './pages/err404/err404.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { LoginComponent } from './pages/login/login.component';
import { UserInterceptor } from './user.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    Err404Component,
    RegisterComponent,
    ProfileComponent,
    TimelineComponent,
    LoginComponent,

    

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:UserInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
