import { Injectable } from '@angular/core';
import { Http, Response  } from "@angular/http";
import 'rxjs/Rx';
import { usuarios } from './entidades/usuarios';
import { producto } from './entidades/producto';

@Injectable()
export class HttpService {


  /**
   *Construcctor HttpService.
   * @param {Http} http
   * @memberof HttpService
   */
  constructor(private http :Http) { }


  /**
   *Método que consulta los usuarios desde la base de datos Firebase
   *
   * @returns lista de usuarios
   * @memberof HttpService
   */
  ObtenerUsuarios()
  {
    return this.http.get('https://proyectofinal-nextu.firebaseio.com/.json')
    .map((response: Response)=> response.json())
  }


  /**
   *Método que consulta los productos desde la base de datos Firebase
   *
   * @returns lista de productos
   * @memberof HttpService
   */
  ObtenerProductos()
  {
    return this.http.get('https://productosnextu.firebaseio.com/.json')
    .map((response: Response)=> response.json())
  }


  /**
   *Método que actualiza los productos desde la base de datos Firebase
   *
   * @param {producto} p_producto
   * @returns producto modificado
   * @memberof HttpService
   */
  ActualizarProductos(p_producto: producto)
  {
    const datos = JSON.stringify(p_producto);
    return this.http.put('https://productosnextu.firebaseio.com/'+p_producto.IDProducto +'/.json',datos)
    .map((response: Response)=> response.json())
  }

}
