
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { PostResolver } from './post.resolver';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';

const routes: Routes = [
  { path: '', component: HomeComponent },                                   // http://localhost:4200/
  {
    path: 'about',                                                          // http://localhost:4200/about
    component: AboutComponent,
    canActivateChild: [AuthGuard],
    children: [{ path: 'extra', component: AboutExtraComponent }]           // http://localhost:4200/about/extra
  },
  { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },   // http://localhost:4200/posts
  {
    path: 'posts/:id',                                                      // http://localhost:4200/posts/12
    component: PostComponent,
    resolve: {
      postResolve: PostResolver
    },
  },
  { path: 'error', component: ErrorPageComponent },                         // http://localhost:4200/error

  // tslint:disable-next-line:max-line-length
  { path: '**', redirectTo: 'error' },                                      // http://localhost:4200/anythinkLink -> http://localhost:4200/error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
