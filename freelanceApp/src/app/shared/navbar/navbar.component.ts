import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  myData:any
  constructor(private _data: UsersService) {
    _data.me().subscribe(
      (data) => {this.myData = data}
    )
   }

  ngOnInit(): void {
  }
  logOut(){
    this._data.logout().subscribe(data=>{
      localStorage.removeItem('myAppToken')
    })
  }
  

}
