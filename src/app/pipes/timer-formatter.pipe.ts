import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timerFormatter'
})
export class TimerFormatterPipe implements PipeTransform {

  transform(counter: number): string {
    return this.timeToString(counter);
  }

  private timeToString(time: number) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}.${formattedMS}`;
  }

}
