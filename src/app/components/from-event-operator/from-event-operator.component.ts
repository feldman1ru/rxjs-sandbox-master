import { Component, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'from-event-operator',
  template: ` <button id="btn" class="btn btn-success">Click me!</button> `,
  styles: [],
})
export class FromEventOperatorComponent implements OnInit {
  click = fromEvent(document, 'click');
  counter: number = 0;

  ngOnInit(): void {
    this.click.subscribe(() => {
      this.counter++;
      console.log(`user clicked ${this.counter} times on the screen`);
    });
  }
}
