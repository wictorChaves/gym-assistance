import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  public counter: number = 0;
  public startTime: number = 0;
  public timerReference: Subscription | undefined;

  ngOnInit(): void { }

  start() {
    this.counter = 0;
    this.resume();
  }

  resume() {
    this.startTime = Date.now() - this.counter;
    this.counterStart();
  }

  pause() {
    this.counterStop();
  }

  stop() {
    this.counterStop();
    this.counter = 0;
  }

  private counterStop() {
    this.timerReference?.unsubscribe();
  }

  private counterStart() {
    this.timerReference = interval(1).subscribe(() => {
      this.counter = Date.now() - this.startTime;
    });
  }

}
