import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  allPost:any[] = []
  
   file:any
  myData:any
  constructor(private _user:UsersService) { 
   
    _user.getAllposts().subscribe( 
      (post) => {console.log(post); this.allPost = post.data} ,
      ( e ) => { console.log('error'); console.log(e); },
      ( ) => { console.log('then'); }
    )

   
  } 
  
 Handelupload(event:any){
   this.file=event?.target.files[0]
   console.log(this.file)
}

uploadfile(){
  const mydata =new FormData ()
  mydata.append ('post',this.file.name)
  this._user.upload(mydata).subscribe(result=>console.log(result))
 
   }
  ngOnInit(): void {
  }
 

}
