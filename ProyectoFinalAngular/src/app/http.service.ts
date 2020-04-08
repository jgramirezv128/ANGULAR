import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";
import 'rxjs/Rx';
import { usuarios } from './entidades/usuarios';

@Injectable()
export class HttpService {

  constructor(private http :Http) { }

  ObtenerData()
  {
    return this.http.get('https://angularappnextu.firebaseio.com/.json')
    .map((response: Response)=> {return <usuarios[]> response.json()})
  }

}
