
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { HttpClient, HttpEventType } from '@angular/common/http';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Injectable({ providedIn: 'root' })
export class TodosService {
  constructor(private http: HttpClient) {}

  addTodo (todo: Todo): Observable<Todo> {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
      .pipe(
        delay(100),
        catchError(error => {
          console.error('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  fetchTodo (): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=2')
      .pipe(
        delay(100),
        catchError(error => {
          console.error('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  removeTodo (id: number): Observable<any> {
    return this.http.delete<void>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      observe: 'events'
    })
      .pipe(
        tap(event => {
          console.log('event: ', event);
          if (event.type === HttpEventType.Sent) {
            console.log('Sent: ', event);
          }
          if (event.type === HttpEventType.Response) {
            console.log('Response: ', event);
          }
        }),
        delay(100),
        catchError(error => {
          console.error('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  completeTodo (id: number): Observable<{ completed: boolean, id: number }> {
    return this.http.put<{ completed: boolean, id: number }>(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      completed: true,
    }, {
      responseType: 'json',
    }).pipe(
      delay(100),
      catchError(error => {
        console.error('Error: ', error.message);
        return throwError(error);
      })
    );
  }
}
