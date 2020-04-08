import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import {CarritoComponent} from "./carrito/carrito.component";
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';

import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService, LoginComponent]
})
export class AppComponent {
  title = 'app works!';
  Logueado = false;

  BotonClick(){
    this.Logueado = !this.Logueado;
  }

  constructor(private LoginUSR:LoginComponent)
  {
      this.Logueado = LoginUSR.ResultadoLogin;
      console.log("Se imprimere resultado Login:" + this.Logueado);
  }

}
