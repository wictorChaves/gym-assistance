import { Component, ViewChild } from '@angular/core';
import { StopwatchDisplayComponent } from 'src/app/components/stopwatch/stopwatch-display/stopwatch-display.component';
import { TIMERSTATES } from 'src/app/services/timer-service/timer-states';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {

  @ViewChild('display') display!: StopwatchDisplayComponent;
  public repetitions: number = 0;

  rest() {
    this.display.start();
    this.repetitions++;
  }

  reset() {
    this.display.stop();
    this.repetitions = 0;
  }

  showRestButton(state: string): boolean {
    return state == TIMERSTATES.STOP;
  }

  showStopButton(state: string): boolean {
    return state != TIMERSTATES.STOP;
  }

  add() {
    this.repetitions++;
  }

  remove() {
    if (this.repetitions > 0) {
      this.repetitions--;
    }
  }

}
