import { Component} from '@angular/core';
import { DataService } from '../data.service';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { CarritoComponent } from "../carrito/carrito.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { HomeComponent } from "../home/home.component";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { Router } from "@angular/router";
import { usuarios } from '../entidades/usuarios';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //Declaración de variables
    private MostrarError= false;
    ResultadoLogin= false;
    correo : string;
    password: string;

    
    constructor(private dataService: DataService, private prouter: Router)
    {
      this.dataService.V_Logueado = false;
    }

    onSubmit()
    {
      this.MostrarError = !this.dataService.getUsuarioValido(this.correo,this.password);
        this.ResultadoLogin = !this.MostrarError;

        if(this.ResultadoLogin)
        {  
          this.prouter.navigate(['/catalogo']);
        }
    }

}
