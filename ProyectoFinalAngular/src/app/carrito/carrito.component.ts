import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { carrito } from 'app/entidades/carrito';
import { Router } from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent{

  private carritoCompra: carrito = new carrito();
  
  constructor(private servicio:DataService, private prouter: Router) 
  { 
     this.carritoCompra=  servicio.getCarrito();
  }

  onPagar()
  {
     this.servicio.Pagar(this.carritoCompra);
     this.prouter.navigate(['/catalogo']);
  }

}
