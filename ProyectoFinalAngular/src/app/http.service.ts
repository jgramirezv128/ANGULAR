import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";
import 'rxjs/Rx';
import { usuarios } from './entidades/usuarios';
import { producto } from './entidades/producto';

@Injectable()
export class HttpService {

  constructor(private http :Http) { }

  ObtenerUsuarios()
  {
    return this.http.get('https://proyectofinal-nextu.firebaseio.com/.json')
    .map((response: Response)=> response.json())
  }

  ObtenerProductos()
  {
    return this.http.get('https://productosnextu.firebaseio.com/.json')
    .map((response: Response)=> response.json())
  }

}
