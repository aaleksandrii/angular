import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostsComponent} from './posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },         // http://localhost:4200/
  { path: 'about', component: AboutComponent },   // http://localhost:4200/about
  { path: 'posts', component: PostsComponent },     // http://localhost:4200/posts
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
