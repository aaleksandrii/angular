
import { Component, OnInit } from '@angular/core';

import { Todo, TodosService } from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  todos: Todo[] = [];

  todoTitle = '';

  loading = false;

  errorMessage = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.fetchTodos();
  }

  addTodo() {
    if (!this.todoTitle.trim()) {
      return;
    }
    this.loading = true;

    const newTodo: Todo = {
      title: this.todoTitle,
      completed: false,
    };

    this.todosService.addTodo(newTodo)
      .subscribe(response => {
        this.todos.push(response);
        this.todoTitle = '';
        this.loading = false;
      }, error => {
        this.errorMessage = error?.message || 'Error';
      });
  }

  fetchTodos() {
    this.loading = true;
    this.todosService.fetchTodo()
      .subscribe(todos => {
        this.todos = todos;
        this.loading = false;
      }, error => {
        this.errorMessage = error?.message || 'Error';
      });
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id)
      .subscribe(() => {
        this.todos = this.todos.filter(post => post.id !== id);
      }, error => {
        this.errorMessage = error?.message || 'Error';
      });
  }

  completeTodo(id: number) {
    this.todosService.completeTodo(id)
      .subscribe(todo => {
        this.todos.find(t => t.id === todo.id).completed = true;
      }, error => {
        this.errorMessage = error?.message || 'Error';
      });
  }
}
