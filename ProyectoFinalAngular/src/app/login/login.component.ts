import { Component} from '@angular/core';
import { DataService } from '../data.service';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { CarritoComponent } from "../carrito/carrito.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { HomeComponent } from "../home/home.component";
import { AppRoutingModule } from "../app-routing/app-routing.module";
import { Router } from "@angular/router";

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
    constructor(private dataService: DataService, private prouter: Router){}

    onSubmit()
    {
      this.MostrarError = !this.dataService.getUsuarioValido(this.correo,this.password);
        this.ResultadoLogin = !this.MostrarError;

        if(this.ResultadoLogin)
        {  
          this.dataService.getProductos();
          this.prouter.navigate(['/catalogo']);
        }
    }

}
