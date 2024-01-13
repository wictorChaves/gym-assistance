import { Component } from '@angular/core';
import { TIMERSTATES } from 'src/app/services/timer-service/timer-states';
import { TimerService } from 'src/app/services/timer.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {

  public timer: number = 0;
  public state: string = TIMERSTATES.STOP;

  constructor(private timerService: TimerService) {

  }

  ngOnInit(): void {
    this.timerService.listerStopwatcher().subscribe(timer => {
      this.timer = timer;
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
