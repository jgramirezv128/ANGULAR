import { producto } from "./producto";

//Entidad para los usuarios
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
    console.log("Total:" + this.Total);
    return this.Total;
   
  }

}
