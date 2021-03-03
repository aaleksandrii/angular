import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

export enum SearchFieldState {
  Title = "title",
  Text = "text",
}

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
export class AppComponent implements OnInit {
  e: number = Math.E;

  str = 'hello world';

  date: Date = new Date();

  float: number = 0.42;

  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }

  search: string = '';
  searchField: string = SearchFieldState.Title;

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
  addPost () {
    this.posts.unshift({
      title: "Angular 11",
      text: 'Course for angular 8 Course for angular 8 Course for angular 8 '
    })
  }

  promise: Promise<string> = new Promise<string>(
    resolve => setTimeout(() => resolve('Promise Resolved'), 4000)
  );

  date$: Observable<Date> = new Observable<Date>(obs => {
    setInterval(() => obs.next(new Date()),1000)
  })

  dateStream: Date

  ngOnInit() {
    this.date$.subscribe(date => {
      this.dateStream = date
    })
  }
}
