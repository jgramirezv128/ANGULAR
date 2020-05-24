import { producto } from "./producto";

//Entidad para el carrito de compras
export class carrito
{
  Productos: producto[];
  Total:number;

  constructor()
  {
    this.Productos = [];
    this.Total = 0;
  }

  CalcularTotal()
  {
    this.Total = 0;
    this.Productos.forEach(x => {
        this.Total = this.Total + x.subtotal;
    });
    return this.Total;
   
  }

}
