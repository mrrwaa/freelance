import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  allPost:any[] = []
  emailFlag:boolean=false
   file:any
  myData:any
  constructor(private _user:UsersService,private _router:Router) { 
   
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
  mydata.append('txt','text')
  this._user.upload(mydata).subscribe(result=>console.log(result))
 
   }

Handelsubmit(myData:any){
  console.log(myData.value)
  this._user.upload(myData.value).subscribe(data=>{
    console.log(data)
    if(data.success=="") this.emailFlag=true
    else this._router.navigateByUrl('/')
  },
  (e)=>{console.log(e.error)},
  ()=>{}
  )
}
   
  ngOnInit(): void {
  }
 

}
