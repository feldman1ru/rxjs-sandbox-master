import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'from-operator',
  template: ` <p>From operator... Look at the console!</p> `,
  styles: [],
})
export class FromOperatorComponent implements OnInit {
  ob$: Observable<string> = from(['one', 'two', 'three']);

  ngOnInit(): void {
    this.ob$.subscribe((data: string) => console.log(data));
  }
}
