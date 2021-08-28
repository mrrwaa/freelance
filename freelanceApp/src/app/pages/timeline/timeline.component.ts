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

    _user.getAllposts().subscribe( 
      (post) => {console.log(post); this.allPost = post.data} ,
      ( e ) => { console.log('error'); console.log(e); },
      ( ) => { console.log('then'); }
    )
  }
  ngOnInit(): void {
  }

}
