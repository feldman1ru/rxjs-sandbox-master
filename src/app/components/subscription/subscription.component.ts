import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-subscription',
  template: ` <p>subscription works!</p> `,
  styles: [],
})
export class SubscriptionComponent implements OnInit {
  observable$: Observable<number> = interval(1000);

  ngOnInit(): void {
    const subscription = this.observable$.subscribe((num) => {
      console.log(num);
      if (num === 3) subscription.unsubscribe();
    });
  }
}
