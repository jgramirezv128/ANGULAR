import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) { }

  getDatos(){
    return this.http.get('https://proyectofinal-nextu.firebaseio.com/.json')
      .map((response: Response)=> response.json())
  }

}
