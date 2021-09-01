import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { PostComponent } from './post/post.component';




const routes: Routes = [
  {path:"", component:TimelineComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"profile", component:ProfileComponent},
  {path:"post", component:PostComponent},
  {path:'**', component:Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
