import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigsModel } from './models/configs.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private http: HttpClient) { }

  public get(): Observable<ConfigsModel> {
    return this.http.get<ConfigsModel>("./assets/configs.json");
  }

}
