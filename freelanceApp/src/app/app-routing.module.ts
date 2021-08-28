import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Err404Component } from './pages/err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { PostsComponent } from './pages/posts/posts.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { TimelineComponent } from './pages/timeline/timeline.component';

const routes: Routes = [
  {path:"", component:TimelineComponent},
  {path:"register", component:RegisterComponent},
  {path:"posts", component:PostsComponent},
  {path:"profile", component:ProfileComponent},
  {path:'**', component:Err404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
