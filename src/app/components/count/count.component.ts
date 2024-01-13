import { Component, OnInit } from '@angular/core';
import { TIMERSTATES } from 'src/app/services/timer-service/timer-states';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  public counter: number = 0;
  public state: string = TIMERSTATES.STOP;

  constructor(private timerService: TimerService) {

  }

  ngOnInit(): void {
    this.timerService.listerCounter().subscribe(counter => {
      this.counter = counter;
    });

    this.timerService.listerState().subscribe(state => {
      this.state = state;
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

  showStartButton(state: string): boolean {
    return state == TIMERSTATES.STOP;
  }

  showResumeButton(state: string): boolean {
    return state == TIMERSTATES.PAUSE;
  }

  showPauseButton(state: string): boolean {
    return state == TIMERSTATES.START || state == TIMERSTATES.RESUME;
  }

  showStopButton(state: string): boolean {
    return state != TIMERSTATES.STOP;
  }

}
