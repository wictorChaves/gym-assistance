import { Component } from '@angular/core';
import { TIMERSTATES } from 'src/app/services/timer-service/timer-states';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {

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
