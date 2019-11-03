import { Component } from '@angular/core';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { LoginComponent } from './login/login.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogosDetalleComponent } from './catalogos-detalle/catalogos-detalle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto Final';
}
