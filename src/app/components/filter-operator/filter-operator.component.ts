import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'filter-operator',
  template: `
    <div *ngIf="users && users.length" class="alert alert-primary">
      <div *ngFor="let user of users">
        <p class="text-center">
          id: <span class="fw-bold">{{ user._id }}</span>
        </p>
        <p class="text-center">
          First: <span class="fw-bold">{{ user.firstName }}</span>
        </p>
        <p class="text-center">
          Last: <span class="fw-bold">{{ user.lastName }}</span>
        </p>
        <p class="text-center">
          Age: <span class="fw-bold">{{ user.age }}</span>
        </p>
        <p class="text-center">
          Phone: <span class="fw-bold">{{ user.phone }}</span>
        </p>
        <p class="text-center">
          Email: <span class="fw-bold">{{ user.email }}</span>
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class FilterOperatorComponent implements OnInit {
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

  users: Array<user> = [];
  user: user | void = undefined;

  getUser(id: string) {
    // this.users$.subscribe((data) => (this.user = data));

    // this.users$
    //   .pipe(filter((user: user) => user._id === id))
    //   .subscribe((data) => (this.user = data));

    // this.users$.subscribe((data) => {
    //   this.users.push(data);
    // });

    this.users$
      .pipe(filter((user: user) => user._id === id))
      .subscribe((data) => {
        this.users.push(data);
      });
  }

  ngOnInit(): void {
    this.getUser('1');
    // this.getUser('3');
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
