import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { takeLast, first, filter } from 'rxjs/operators';
@Component({
  selector: 'take-last-operator',
  template: `
    <div *ngIf="user">
      <p>
        name:
        <span class="fw-bold">{{ user.firstName }} {{ user.lastName }}</span>
      </p>
      <p>
        email: <span class="fw-bold">{{ user.email }}</span>
      </p>
    </div>
  `,
  styles: [],
})
export class TakeLastOperatorComponent implements OnInit {
  users$: Observable<user> = from([
    {
      _id: '1',
      firstName: 'user',
      lastName: 'last name',
      age: 5,
      phone: '0500000000',
      email: 'user@gmail.com',
    },
    {
      _id: '2',
      firstName: 'admin',
      lastName: 'last name',
      age: 5,
      phone: '0500000000',
      email: 'admin@gmail.com',
    },
    {
      _id: '3',
      firstName: 'business',
      lastName: 'last name',
      age: 5,
      phone: '0500000000',
      email: 'business@gmail.com',
    },
  ]);

  user: user | void = undefined;

  filterUser(id: string) {
    this.users$
      .pipe(filter((user: user) => user._id === id))
      .subscribe((data) => (this.user = data));
  }

  ngOnInit(): void {
    // this.users$.pipe(takeLast(1)).subscribe(console.log);
    // this.users$.pipe(first()).subscribe((data) => (this.user = data));
    this.filterUser('2');
  }
}

interface user {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  email: string;
}
