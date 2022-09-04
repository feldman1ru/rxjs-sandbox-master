import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'map-operator',
  template: `
    <h1 class="text-center">{{ 'todos list' | titlecase }}</h1>
    <hr />

    <div class="container">
      <ul *ngIf="todos && todos.length">
        <li *ngFor="let todo of todos">
          Todo: <span class="fw-bold">{{ todo.task | titlecase }}</span> |
          Complete:
          <span class="fw-bold">{{ todo.isComplete }}</span>
        </li>
      </ul>
    </div>
  `,
  styles: [],
})
export class MapOperatorComponent implements OnInit {
  list: todo[] = [
    { task: 'go to gim', isComplete: false },
    { task: 'make rxjs presentation', isComplete: true },
    { task: 'jump around', isComplete: false },
  ];

  todos$: Observable<todo> = from(this.list);
  todos: todo[] = [];

  getTodos() {
    // return this.todos$;
    return this.todos$.pipe(
      map((todo: todo) => {
        todo.isComplete = true;
        return todo;
      })
    );
  }

  ngOnInit(): void {
    this.getTodos().subscribe((todo: todo) => this.todos.push(todo));
  }
}

interface todo {
  task: string;
  isComplete: boolean;
}
