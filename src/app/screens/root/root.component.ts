import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  public selectedTab: number = 0;

  rightSwipe() {
    this.setIndex(1);
  }

  leftSwipe() {
    this.setIndex(0);
  }

  setIndex(index: number) {
    this.selectedTab = index;
  }

}
