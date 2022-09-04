import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-pipeable-operators',
  templateUrl: './pipeable-operators.component.html',
  styleUrls: []
})
export class PipeableOperatorsComponent implements OnInit {

  users$: Observable<user> = from([
    {
      firstName: 'user',
      lastName: 'last name',
      age: 5,
      phone: '0500000000',
      email: 'user@gmail.com',
    },
    {
      firstName: 'admin',
      lastName: 'last name',
      age: 5,
      phone: '0500000000',
      email: 'admin@gmail.com',
    },
    {
      firstName: 'business',
      lastName: 'last name',
      age: 5,
      phone: '0500000000',
      email: 'business@gmail.com',
    },
  ]);

  user: user | void = undefined;

  filterUser(email: string) {
    this.users$
      .pipe(filter((user: user) => user.email === email))
      .subscribe((data) => (this.user = data));
  }



  ngOnInit(): void {
    this.users$.pipe(first()).subscribe((data) => (this.user = data));
    this.filterUser('2');

  }

}

interface user {
  firstName: string;
  lastName: string;
  age: number;
  phone: string;
  email: string;
}
