import { Component, Injectable, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})

export class BarraSuperiorComponent {
  @Input() p_ContadorProductos: number; //Cantidad de productos agregados en el carrito.

  private V_RutaIconos:string = "../../assets/iconos/"; //En modo producción se cambia la ruta relativa

  constructor()
  {
    if (environment.production) {
      this.V_RutaIconos = "./assets/iconos/"
    }
  }
}
