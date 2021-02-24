import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>(); // in native js this line look like: onAdd = new EventEmitter()

  title = '';

  text = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(): void {
    if (this.title.trim() && this.text.trim()) {
      this.onAdd.emit({
        title: this.title,
        text: this.text,
      });

      this.title = this.text = '';
    }
  }

}
