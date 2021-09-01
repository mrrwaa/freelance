import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session15';
  file:any
  constructor(private _user:UsersService){}
  Handelupload(event:any){
   this.file=event?.target.files[0]
   console.log(this.file)
  };
  uploadfile(){
 const mydata =new FormData ()
 mydata.append ('files',this.file.name)
 this._user.upload(mydata).subscribe(result=>console.log(result))

  }

}
