import { Component, OnInit } from '@angular/core';
import { BarraSuperiorComponent } from "../barra-superior/barra-superior.component";
import { CarritoComponent } from "../carrito/carrito.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
