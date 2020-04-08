import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { usuarios } from './entidades/usuarios';
import { producto } from './entidades/producto';
import { timingSafeEqual } from 'crypto';

@Injectable()
export class DataService {

  //Declaración de las variables
  private listausuarios: usuarios[] =[];
  private listaproductos: producto[] =[];
  private listaventas: usuarios[] =[];

  constructor(private httpService:HttpService) { }

  //Método que obtiene todos los usuarios en la base de datos Firebase, retorna listausuarios
  getUsuarios():void
  {
    //Llamada al servicio para obtener todos los usuarios
    this.httpService.ObtenerData()
    .subscribe(
      resultArray=> this.listausuarios = resultArray,
      error => console.log(error)
      )

      //(data: Response) =>
        //{
           //console.log(data);
          //Cargar los datos en una nueva entidad
          //let aux : any[]=[];
          //for(let key in data)
          //{
            //console.log(data[key]);
            //if (data[key] !=null)
            //{

              //Llena los datos de cada usuario devueltos en el API
              //let V_usuario =new usuarios();
             // V_usuario.correo = data[key].user;
              //V_usuario.password = data[key].password;
              //aux.push(V_usuario);

              //console.log(Object.keys(data));
            //}
          //}
          //this.listausuarios = aux;
        //}
    //)
    //return this.listausuarios;

  }

  //Método que valida si el usuario es un usuario válido y retorna un boolean
  getUsuarioValido(pUser:string, pPassword:string)
  {
    this.getUsuarios();
    for(let key in this.listausuarios)
    {
      //console.log("El usuario por parámetros es: "+pUser + pPassword);
      //console.log("El usuario del API: "+this.listausuarios[key].correo +  this.listausuarios[key].password );
      if (pUser==this.listausuarios[key].correo && pPassword==this.listausuarios[key].password)
      {
          return true;
      }
    }
    return false;
  }
}

class Ventas {
  V_listausuarios: usuarios[];
  V_listaproductos: producto[];
  V_listaventas: usuarios[];

  constructor()
  {
    this.V_listausuarios =[];
    this.V_listaproductos =[];
    this.V_listaventas =[];
  }

}
