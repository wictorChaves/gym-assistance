import { Component } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent {

  public repetitions: number = 0;

  stopEvent() {
    this.repetitions++;
  }

  reset() {
    this.repetitions = 0;
  }

}
