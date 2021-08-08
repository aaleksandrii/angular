
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  showIds = false;
  fragment;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public postsService: PostsService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showIds = Boolean(params.showIds);
    });
    this.route.fragment.subscribe((fragment) => {
      this.fragment = fragment;
    });
  }

  toggleIdsProgram(): void {
    console.log('click ', this.showIds);
    this.router.navigate(['/posts'], {
      queryParams: { showIds: true },
      fragment: 'Lorem 1',
    });
  }
}
