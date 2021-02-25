import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { IPost } from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>(); // in native js this line look like: onAdd = new EventEmitter()

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;

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

  focusTitle(): void {
    this.inputRef.nativeElement.focus();
  }

}
