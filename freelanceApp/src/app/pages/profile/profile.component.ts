import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  myData:any
  constructor(private _data:UsersService) { }

  ngOnInit(): void {
    this._data.me().subscribe(data=>{
      this.myData=data
    })
  }

}
