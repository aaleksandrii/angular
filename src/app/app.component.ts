import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundToggle = false;

  animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

  posts = [
    {
      title: 'lorem',
      author: 'Andrew',
      comments: [
        {name: 'Andros', text: 'Lorem ipsum dolor sit amet.'},
        {name: 'Andy', text: 'Ipsum dolor sit amet.'},
        {name: 'Andre', text: 'Dolor sit amet.'},
      ]
    },
    {
      title: 'Ipsum',
      author: 'Andrii',
      comments: [
        {name: 'Andrea', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, pariatur.'},
        {name: 'Andrey', text: 'Officia, pariatur.'},
      ]
    },
  ];
}
