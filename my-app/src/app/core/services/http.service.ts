//Service for communicating between php and Angular
import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(private http: HttpClient) {
    
  }

  public get(baseUrl:string) {
    return this.http
      .get<any>(`${baseUrl}`)
      .pipe(
        map((Data) => {
          return Data;
        })
      );
  }


}
