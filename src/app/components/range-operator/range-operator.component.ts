import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'range-operator',
  template: ` <p>range-operator works!</p> `,
  styles: [],
})
export class RangeOperatorComponent implements OnInit {
  numbers = range(4, 6);

  ngOnInit(): void {
    this.numbers.subscribe({
      next: (num: number) => console.log(num),
      complete: () => console.log('Complete!'),
    });
  }
}
