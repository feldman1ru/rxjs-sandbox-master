import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'take-while-operator',
  template: ` <p>take-while-operator works!</p> `,
  styles: [],
})
export class TakeWhileOperatorComponent implements OnInit {
  count$: Observable<number> = interval(1500);
  constructor() {}

  ngOnInit(): void {
    // this.count$.pipe(takeWhile((num) => num < 5));
    this.count$.pipe(takeWhile((num) => num < 5)).subscribe(console.log);
  }
}
