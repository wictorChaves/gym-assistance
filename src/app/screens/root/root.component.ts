import { Component } from '@angular/core';
import { ConfigsService } from 'src/app/services/configs.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent {

  public version: string = '';
  public selectedTab: number = 0;

  constructor(configsService: ConfigsService) {
    configsService.get().subscribe(configs => {
      this.version = configs.version;
    });
  }

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
