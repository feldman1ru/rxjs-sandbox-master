import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  template: ` <p>subject works!</p> `,
  styles: [],
})
export class SubjectComponent implements OnInit {
  subject: any = new Subject<number>();

  ngOnInit(): void {
    setTimeout(() => {
      this.subject.subscribe({
        next: (data: any) => console.log(`observerA: ${data}`),
        error: (error: any) => new Error(error),
      });

      this.subject.subscribe({
        next: (data: any) => console.log(`observerB: ${data}`),
      });

      this.subject.next(1);
      this.subject.next(2);
      this.subject.error('in error');
      this.subject.complete();
      this.subject.next(2);
    }, 2000);
  }
}
