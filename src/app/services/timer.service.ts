import { Observable, Subject, Subscription, interval, startWith } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private counter: Subject<number> = new Subject();
  private timerReference: Subscription | undefined;

  private startTime: number = 0;
  private internalCounter: number = 0;

  constructor() {
    this.counter.pipe(startWith(0));
    this.counter.subscribe(counter => {
      this.internalCounter = counter;
    });
  }

  start() {
    this.counter.next(0);
    this.resume();
  }

  resume() {
    this.startTime = Date.now() - this.internalCounter;
    this.counterStart();
  }

  pause() {
    this.counterStop();
  }

  stop() {
    this.counterStop();
    this.counter.next(0);
  }

  listerCounter(): Observable<number> {
    return this.counter;
  }

  private counterStop() {
    this.timerReference?.unsubscribe();
  }

  private counterStart() {
    this.timerReference = interval(1).subscribe(() => {
      this.counter.next(Date.now() - this.startTime);
    });
  }

}
