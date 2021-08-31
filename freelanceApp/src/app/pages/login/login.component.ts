import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {email:"", password:""}
  constructor(private _data: UsersService , private _router:Router) { }

  ngOnInit(): void {
  }
  loginMe(){
    this._data.login(this.loginData).subscribe(data=>{
      localStorage.setItem('myAppToken', data.data.token)
      this._router.navigateByUrl('/')
    })
  }
  
}
