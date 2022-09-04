import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'take-operator',
  template: ` <p>take-pipe-operator works!</p> `,
  styles: [],
})
export class TakePipeOperatorComponent implements OnInit {
  count$: Observable<number> = interval(2000);
  constructor() {}

  ngOnInit(): void {
    // this.count$.subscribe(console.log);
    // this.count$.pipe(take(4)).subscribe(() => console.log('in ngOnInit!!!'));
    this.count$.pipe(take(3)).subscribe(console.log);
  }
}
