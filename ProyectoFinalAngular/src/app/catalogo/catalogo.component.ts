import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { producto } from '../entidades/producto';
import { Console } from '@angular/core/src/console';
import { iterableDiff } from '@angular/core/src/change_detection/change_detection';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent{

  //Declaración de variables
  V_listaproductos: producto[];
  V_listaproductosFiltro: producto[];
  V_listaproductosCarrito: producto[] = [];
  V_filtro: string = "";

  //Construcctor
  constructor(private dataService: DataService) 
  { 
    console.log("Constructor GetProductos");
    this.V_listaproductos=  this.dataService.getProductos();
    this.V_listaproductosFiltro = this.V_listaproductos;
  }

  //Evento para filtrar los datos
  onKey(event: any): void
  {
    this.V_filtro = event.target.value;
    this.V_listaproductosFiltro = [];

    if (this.V_filtro.length > 0) {
        this.V_listaproductos.forEach(x => {
          if (x.Nombre.toLowerCase().indexOf(this.V_filtro.toLowerCase())>-1) {
            this.V_listaproductosFiltro.push(x);
          }  
      });
    }
    else
    {
      this.V_listaproductosFiltro = this.V_listaproductos;
    }
  }

AgregarItemCarrito(Item:producto)
{
  this.dataService.Agregar(Item);
}

}
