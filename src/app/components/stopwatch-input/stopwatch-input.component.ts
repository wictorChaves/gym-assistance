import { Component, Output, EventEmitter } from '@angular/core';
import { ACTIVE } from './active';

@Component({
  selector: 'app-stopwatch-input',
  templateUrl: './stopwatch-input.component.html',
  styleUrls: ['./stopwatch-input.component.scss']
})
export class StopwatchInputComponent {

  @Output() listenTimestamp: EventEmitter<number> = new EventEmitter<number>();

  public minutes: number = 0;
  public seconds: number = 0;
  public milliseconds: number = 0;

  public currentActive: string = ACTIVE.MINUTES;

  edit(currentActive: string) {
    this.currentActive = currentActive;
  }

  add() {

    if (this.currentActive == ACTIVE.MINUTES) {
      this.minutes = this.addUntilLimit(this.minutes);
    }

    if (this.currentActive == ACTIVE.SECONDS) {
      this.seconds = this.addUntilLimit(this.seconds, 59);
    }

    if (this.currentActive == ACTIVE.MILISECONDS) {
      this.milliseconds = this.addUntilLimit(this.milliseconds);
    }

  }

  remove() {

    if (this.currentActive == ACTIVE.MINUTES) {
      this.minutes = this.removeUntilLimit(this.minutes);
    }

    if (this.currentActive == ACTIVE.SECONDS) {
      this.seconds = this.removeUntilLimit(this.seconds);
    }

    if (this.currentActive == ACTIVE.MILISECONDS) {
      this.milliseconds = this.removeUntilLimit(this.milliseconds);
    }

  }

  removeUntilLimit(currentValue: number, limit: number = 0) {
    return (currentValue > limit) ? currentValue - 1 : 0;
  }

  addUntilLimit(currentValue: number, limit: number = 99) {
    return (currentValue >= limit) ? 0 : currentValue + 1;
  }

  sendTimestamp() {
    var timestamp = this.getTimestamp();
    this.listenTimestamp.emit(timestamp);
  }

  getTimestamp(): number {
    const minutes = this.minutes * 60000;
    const seconds = this.seconds * 1000;
    const milliseconds = this.milliseconds * 10;

    return minutes + seconds + milliseconds;
  }

}
