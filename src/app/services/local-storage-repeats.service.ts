import { Injectable } from '@angular/core';
import { RepeatsModels } from './models/repeats.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageRepeatsService {

  public key: string = 'repeats';

  constructor() { }

  set(rootModel: RepeatsModels) {
    var obj = JSON.stringify(rootModel);
    this.setStorage(obj);
  }

  get(): RepeatsModels {
    var text = this.getStorage();
    if (text) {
      return JSON.parse(text);
    } else {
      return new RepeatsModels();
    }
  }

  exists(): boolean {
    var text = this.getStorage();
    return text !== null;
  }

  private getStorage(): string | null {
    return localStorage.getItem(this.key);
  }

  private setStorage(text: string) {
    localStorage.setItem(this.key, text);
  }

}
