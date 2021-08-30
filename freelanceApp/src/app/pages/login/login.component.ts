import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {email:"marwaa@gmail.com", password:"23@G9hello"}
  constructor(private _data: UsersService) { }

  ngOnInit(): void {
  }
  loginMe(){
    this._data.login(this.loginData).subscribe(data=>{
      console.log(data)
      localStorage.setItem('myAppToken', data.data.token)
    })
  }
}
