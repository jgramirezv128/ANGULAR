import { Component} from '@angular/core';
import { DataService } from '../data.service';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { CarritoComponent } from "../carrito/carrito.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { HomeComponent } from "../home/home.component";
import {Router} from '@angular/router'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private MostrarError= false;
    ResultadoLogin= false;
    correo ="";
    password="";
    constructor(private dataService: DataService, private router: Router){}

    onSubmit()
    {
      this.MostrarError =true;
      console.log("Antes: "+ this.MostrarError.toString());
        this.MostrarError = !this.dataService.getUsuarioValido(this.correo,this.password);
        console.log("Mostrar Error: "+ this.MostrarError.toString());
        this.ResultadoLogin = true;

        if(this.ResultadoLogin)
        {
          this.router.navigateByUrl('/home');
        }

        //this.MostrarError = !this.MostrarError;
    }

}
