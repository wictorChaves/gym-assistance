import { Observable, Subject, startWith } from 'rxjs';
import { Injectable } from '@angular/core';
import { TIMERSTATES } from './timer-service/timer-states';
import { Timer } from './timer-service/timer';

@Injectable({
  providedIn: 'root'
})
export class TimerService extends Timer {

  private state: Subject<string> = new Subject();

  constructor() {
    super();
    this.state.pipe(startWith(TIMERSTATES.STOP));
  }

  override start() {
    this.state.next(TIMERSTATES.START);
    super.start();
  }

  override resume() {
    this.state.next(TIMERSTATES.RESUME);
    super.resume();
  }

  override pause() {
    this.state.next(TIMERSTATES.PAUSE);
    super.pause();
  }

  override stop() {
    this.state.next(TIMERSTATES.STOP);
    super.stop();
  }

  listerState(): Observable<string> {
    return this.state;
  }

}
