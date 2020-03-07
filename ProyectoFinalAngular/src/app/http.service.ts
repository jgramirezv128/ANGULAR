import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http :Http) { }

  ObtenerUsuarios()
  {
    return this.http.get('https://angularappnextu.firebaseio.com/.json')
    .map((response: Response)=> response.json())
  }

}
