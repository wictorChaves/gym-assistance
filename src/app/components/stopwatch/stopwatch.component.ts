import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() startEvent: EventEmitter<void> = new EventEmitter();
  @Output() resumeEvent: EventEmitter<void> = new EventEmitter();
  @Output() pauseEvent: EventEmitter<void> = new EventEmitter();
  @Output() stopEvent: EventEmitter<void> = new EventEmitter();

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
    this.startEvent.emit();
  }

  resume() {
    this.timerService.resume();
    this.resumeEvent.emit();
  }

  pause() {
    this.timerService.pause();
    this.pauseEvent.emit();
  }

  stop() {
    this.timerService.stop();
    this.stopEvent.emit();
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
