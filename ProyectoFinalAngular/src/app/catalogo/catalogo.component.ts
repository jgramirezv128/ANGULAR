import { Component, Input,Output, EventEmitter  } from '@angular/core';
import { DataService } from '../data.service';
import { producto } from '../entidades/producto';

@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent{
  //Declaración de variables
  V_listaproductos: producto[] =[]; // lista original de productos
  V_listaproductosFiltro: producto[]; // lista filtrada de productos
  V_filtro: string;//variable utiliza como parámetro para filtrar
  V_Contador:number; // contador de productos agregados

  //Constructor de la clase catálogo
  constructor(private dataService: DataService) 
  { 
    this.V_listaproductos=  this.dataService.listaproductos;
    this.V_listaproductosFiltro = this.V_listaproductos;
    this.V_filtro="";
   }

  /**
   * Evento para filtrar los datos cuando presiona una tecla
   * @param {*} p_Evento //Evento recibido por parámetro
   * @memberof CatalogoComponent
   */
  onDigitar(p_Evento: any): void
  {
    this.V_filtro = p_Evento.target.value;
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

/**
 * Método para agregar items al carrito de compra
 *
 * @param {producto} Item de tipo producto
 * @memberof CatalogoComponent
 */
AgregarItemCarrito(Item:producto)
{
  if (Item.cantidad>0) 
  {
    this.V_Contador = this.dataService.Agregar(Item);
  }
  
}

}
