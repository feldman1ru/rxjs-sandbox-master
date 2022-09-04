import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-click-event-app',
  templateUrl: './click-event-app.component.html',
  styleUrls: []
})
export class ClickEventAppComponent implements OnInit {

  clickObservable: Observable<Event> = fromEvent(document,'click');

  ngOnInit(): void {
    this.subscribeToObservable();
  }
 
  private subscribeToObservable() {
    this.clickObservable.subscribe(() => { 
    console.log(`The dom has been clicked!`);
  })
}

}
