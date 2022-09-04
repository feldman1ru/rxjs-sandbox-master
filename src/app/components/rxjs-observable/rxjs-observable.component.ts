import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'rxjs-observable',
  templateUrl: './rxjs-observable.component.html',
  styles: [],
})
export class RxjsObservableComponent {
  magazine: Observable<string | number> = new Observable((observer) => {
    try {
      observer.next('First Edition ');
      observer.next('Second Edition ');
      observer.next(222);
      observer.next('Third Edition ');
      throw new Error('in error!!!!!!!');
      observer.complete();
      observer.next('Forth Edition ');
    } catch (error) {
      observer.error(error);
    }
  });

  sub() {
    this.magazine.subscribe((data) => console.log(data));
  }
}
