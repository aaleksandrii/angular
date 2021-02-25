import { ChangeDetectionStrategy } from '@angular/core';
import {
  Component, ContentChild, Input, Output, EventEmitter, OnInit, ElementRef, AfterContentChecked,
  AfterViewChecked, AfterViewInit, DoCheck, OnChanges, OnDestroy, AfterContentInit, SimpleChanges
} from '@angular/core';

import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

  @Input() post: IPost;
  @Output() handleRemove: any = new EventEmitter<number>();
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  removePost(): void {
    this.handleRemove.emit(this.post.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: ', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    // console.log(this.infoRef.nativeElement);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
