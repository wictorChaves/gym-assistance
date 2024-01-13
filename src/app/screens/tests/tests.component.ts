import { Component, OnInit } from '@angular/core';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  public counter: number = 0;

  constructor(private timerService: TimerService) {

  }

  ngOnInit(): void {
    this.timerService.listerCounter().subscribe(counter => {
      this.counter = counter;
    });
  }

  start() {
    this.timerService.start();
  }

  resume() {
    this.timerService.resume();
  }

  pause() {
    this.timerService.pause();
  }

  stop() {
    this.timerService.stop();
  }

}
