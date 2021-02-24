import { Component } from '@angular/core';

export interface IPost {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [
    {
      id: 1,
      title: 'If a tree falls',
      text: 'If a tree falls in the forest and no one is there to hear it, do I still need a logging permit? facebook sharing button',
    }, {
      id: 2,
      title: 'Just did my own taxes',
      text: 'Just did my own taxes. I should be in jail by Friday',
    }, {
      id: 3,
      title: 'Social vegan',
      text: 'I\'m a social vegan, I\'m avoiding meets',
    },
  ];

  updatePosts(post: IPost): any {
    this.posts.unshift(post);
  }
}
