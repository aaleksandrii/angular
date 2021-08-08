
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { Post, PostsService } from './posts.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<Post> {
  constructor(private postsService: PostsService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Post | Observable<Post> | Promise<Post> {
    return this.postsService.getById(Number(route.params.id));
  }
}
