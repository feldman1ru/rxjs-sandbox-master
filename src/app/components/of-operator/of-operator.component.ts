import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'of-operator',
  template: ` <p>of-operator works!</p> `,
  styles: [],
})
export class OfOperatorComponent implements OnInit {
  // string$: Observable<string> = of('David');
  // array$: Observable<string[]> = of(['David', 'Zozo', 'Momo']);
  // object$: Observable<{ name: string; age: number }> = of({
  //   name: 'david',
  //   age: 42,
  // });
  objectsArray$: Observable<{ name: string; age: number }[]> = of([
    { name: 'user', age: 15 },
    { name: 'admin', age: 677 },
  ]);

  ngOnInit(): void {
    // this.string$.subscribe((data) => console.log('3. string: ', data));
    // this.array$.subscribe((data) => console.log('1. array: ', data));
    // this.object$.subscribe((data) => console.log('2. object: ', data));
    this.objectsArray$.subscribe((data) =>
      // console.log('4. array of objects: ', data)
      console.log(data)
    );
  }
}
