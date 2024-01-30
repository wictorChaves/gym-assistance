import { Component, ViewChild } from '@angular/core';
import { StopwatchDisplayComponent } from 'src/app/components/stopwatch/stopwatch-display/stopwatch-display.component';
import { LocalStorageRepeatsService } from 'src/app/services/local-storage-repeats.service';
import { RepeatsModels } from 'src/app/services/models/repeats.model';
import { TIMERSTATES } from 'src/app/services/timer-service/timer-states';

@Component({
  selector: 'app-full-set',
  templateUrl: './full-set.component.html',
  styleUrls: ['./full-set.component.scss']
})
export class FullSetComponent {

  @ViewChild('display') display!: StopwatchDisplayComponent;
  public repeatsModels: RepeatsModels = new RepeatsModels();

  constructor(private localStorageService: LocalStorageRepeatsService) {
    this.repeatsModels = localStorageService.get();
  }

  rest() {
    this.display.start();
    this.nextRepeat();
    this.saveRepeatsModels();
  }

  go() {
    this.display.stop();
    if (this.repeatsModels.currentRepeats >= this.repeatsModels.repeats) {
      this.repeatsModels.currentRepeats = 1;
    }
  }

  nextRepeat() {
    if (this.repeatsModels.currentRepeats >= this.repeatsModels.repeats) {
      this.repeatsModels.currentRepeats = 0;
    } else {
      this.repeatsModels.currentRepeats++;
    }
  }

  showRestButton(state: string): boolean {
    return state == TIMERSTATES.STOP;
  }

  showStopButton(state: string): boolean {
    return state != TIMERSTATES.STOP;
  }

  reset() {
    this.display.stop();
    this.repeatsModels.currentRepeats = 0;
    this.saveRepeatsModels();
  }

  add() {
    this.repeatsModels.repeats++;
    this.saveRepeatsModels();
  }

  remove() {
    if (this.repeatsModels.repeats > 0) {
      this.repeatsModels.repeats--;
      this.saveRepeatsModels();
    }
  }

  setRepeatsModels(repeatsModels: RepeatsModels) {
    this.repeatsModels = repeatsModels;
  }

  saveRepeatsModels() {
    this.localStorageService.set(this.repeatsModels);
  }

  setAndSaveRepetitions(repeatsModels: RepeatsModels) {
    this.repeatsModels = repeatsModels;
    this.saveRepeatsModels();
  }

}
