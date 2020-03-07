import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {

  private listausuarios: usuarios[] =[];
  private MostrarError= false;

  constructor(private httpService:HttpService) { }

  getUsuarios()
  {
    this.httpService.ObtenerUsuarios()
    .subscribe(
      (data: Response) =>
        {
          let aux : any[]=[];
          this.MostrarError= false;
          for(let key in data)
          {
            if (data[key] !=null)
            {
              let V_usuario =new usuarios();
              V_usuario.correo = data[key].user;
              V_usuario.password = data[key].password;
              aux.push(V_usuario);
            }
          }
          this.listausuarios = aux;
        }
    )
    //console.log("El usuario existe? " + this.resultado);

    return this.listausuarios;
    //return false;
  }

  getUsuarioValido(pUser:string, pPassword:string)
  {
    this.getUsuarios();
    for(let key in this.listausuarios)
    {
      console.log("El usuario por parámetros es: "+pUser + pPassword);
      console.log("El usuario del API: "+this.listausuarios[key].correo +  this.listausuarios[key].password );
      if (pUser==this.listausuarios[key].correo && pPassword==this.listausuarios[key].password)
      {
          return true;
      }
    }
    return false;
  }



}

class usuarios
{
  correo: string;
  password: string;
}
