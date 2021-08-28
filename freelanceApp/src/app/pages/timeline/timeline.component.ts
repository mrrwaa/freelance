import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  allPost:any[] = []
  constructor(private _user:UsersService) { 

    _user.getAllPosts().subscribe( 
      (data) => {console.log(data); this.allPost = data} ,
      ( e ) => { console.log('error'); console.log(e); },
      ( ) => { console.log('then'); }
    )
  }

  ngOnInit(): void {
  }



}
