import { Component } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  subscription: Subscription;

  counter = 0;

  stream$: Subject<number> = new Subject<number>(); // NOTE: в дженерик мы передаем то что будем имитить, в данном случае number

  constructor() {
    // nameVariable$ - со знаком доллара называются переменные которое содержат в себе какую то реактривность

    // NOTE: stream interval
    // const intervalStream$ = interval(1000);
    //
    // this.subscription = intervalStream$
    //   .pipe(
    //     filter(value => value % 2 === 0),
    //     map(value => `Mapped value ${value}`),
    //     // switchMap(() => interval(500)),
    //   )
    //   .subscribe(value => {
    //    console.log(value);
    //   });

    // NOTE: custom stream
    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1);
    //   }, 1500);
    //   setTimeout(() => {
    //     observer.complete();
    //   }, 1800);
    //   setTimeout(() => {
    //     observer.error('Something went wrong');
    //   }, 2000);
    //   setTimeout(() => {
    //     observer.next(2);
    //   }, 2000);
    // });
    //
    // this.subscription = stream$.subscribe(
    //   value => console.log('value: ', value),
    //   error => console.log('error: ', error),
    //   () => console.log('complete!'), // NOTE: НЕ ТОЖЕ самое что и finally, complete выполняется только при условии отсутствия ошибок
    // );

    // NOTE: Subject - расширенная версия Observable. Можем не только принимать, но и имитить
    this.subscription = this.stream$.subscribe(value => {
      console.log('Subscribe: ', value);
    });
  }

  stop = (): void => {
    this.subscription.unsubscribe();
  }

  next = (): void => {
    this.counter++;
    this.stream$.next(this.counter);
  }
}
