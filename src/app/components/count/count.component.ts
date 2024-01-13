import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {

  public counter: number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  add() {
    this.counter++;
  }

  remove() {
    if (this.counter > 0) {
      this.counter--;
    }
  }

}
