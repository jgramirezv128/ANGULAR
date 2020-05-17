import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "./home/home.component";
import {CarritoComponent} from "./carrito/carrito.component";
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { AppRoutingModule } from "../app/app-routing/app-routing.module";

import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  
  private CambiaFondo: boolean = true;
  private NombreFondo: string ="../assets/imagenesBase/login-fondo.jpg";

  constructor()
  {
    if (this.CambiaFondo) 
    {
      console.log("Fondo:" + this.NombreFondo);
      this.NombreFondo = "../assets/imagenesBase/main-fondo.jpg";
    }
  }

 }
