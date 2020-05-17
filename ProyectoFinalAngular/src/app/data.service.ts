import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { usuarios } from './entidades/usuarios';
import { producto } from './entidades/producto';
import { carrito } from './entidades/carrito';
import { Observable,Subject} from 'rxjs';

@Injectable()
export class DataService {

  //Declaración de las variables
  private listausuarios: usuarios[] =[];
  private listaproductos: producto[] =[];
  private carritoCompra: carrito;
  V_ContadorDataService: number;
  

  constructor(private httpService:HttpService) 
  { 
    this.carritoCompra = new carrito();
    this.V_ContadorDataService = 0;
    console.log("Constructor carrito-Dataservice")
  }

  //Método que obtiene todos los usuarios en la base de datos Firebase, retorna listausuarios
  getUsuarios()
  {
    //Llamada al servicio para obtener todos los usuarios
    this.httpService.ObtenerUsuarios()
    .subscribe(
      (data: Response) =>
        {
          let aux : any[]=[];
          for(let key in data)
          {
            if (data[key] !=null)
            {
             
              let V_usuario =new usuarios();
              V_usuario.usuario = data[key].usuario;
              V_usuario.password = data[key].password;
              aux.push(V_usuario);
            }
          }
          this.listausuarios = aux;
        }
    ) 

    return this.listausuarios;

  }

  //Método que obtiene todos los productos en la base de datos Firebase, retorna listausuarios
  getProductos()
  {
    const PathImagenes = '../assets/imagenesBase/';
    //Llamada al servicio para obtener todos los usuarios
    this.httpService.ObtenerProductos()
    .subscribe(
      (data: Response) =>
        {
          let aux : any[]=[];
          for(let key in data)
          {
            if (data[key] !=null)
            {
              let V_producto =new producto();
              V_producto.Nombre = data[key].Nombre;
              V_producto.Precio = data[key].Precio;
              V_producto.Stock = data[key].Stock;
              V_producto.cantidad = 0;
              V_producto.subtotal = 0;
              V_producto.imagen = PathImagenes + data[key].imagen;
              aux.push(V_producto);
            }
          }
          this.listaproductos = aux;
        }
    )
    return this.listaproductos;

  }

  getCarrito()
  {
    console.log("Buscando carrito: " + this.carritoCompra );
    return this.carritoCompra;
  }

  getProductosByNombre(pNombre:string)
{
  this.getProductos();
  
}
  

  //Método que valida si el usuario es un usuario válido y retorna un boolean
  getUsuarioValido(pUser:string, pPassword:string)
  {
    this.getUsuarios();
    for(let key in this.listausuarios)
    {
         if (pUser==this.listausuarios[key].usuario && pPassword==this.listausuarios[key].password)
      {
          return true;
      }
    }
    return false;
  }

  Agregar(Item:producto)
  {
    var resultado = this.carritoCompra.Productos.findIndex(x=> x.Nombre == Item.Nombre)
    console.log(resultado); 
    if (resultado== -1) 
    {
      console.log("Se agrega el producto nuevo");
      Item.subtotal = Item.Precio * Item.cantidad;
      Item.Stock = Item.Stock - Item.cantidad;
      this.carritoCompra.Productos.push(Item);
      this.V_ContadorDataService = this.V_ContadorDataService +1;
      
    }else
    {
       var ProductoEncontrado = this.carritoCompra.Productos.find(x=> x.Nombre == Item.Nombre)
       console.log("Item : " + Item.Stock);
       console.log("Item Cantidad: " + Item.cantidad);

       var ProductoTemp: producto = new producto;
       ProductoTemp = Item;
       ProductoTemp.cantidad = Item.cantidad
       ProductoTemp.subtotal = Item.Precio * ProductoTemp.cantidad;
       ProductoTemp.Stock = ProductoEncontrado.Stock - Item.cantidad;
       
       console.log("ProductoTemp : " +ProductoTemp.Stock);
       console.log("ProductoTemp Cantidad: " +ProductoTemp.cantidad);
      this.carritoCompra.Productos.splice(resultado,1,Item)
 

    }

    this.carritoCompra.Total = this.carritoCompra.CalcularTotal();
    this.ConsultarContador();
  }
  private subject = new Subject<any>();

 
  ConsultarContador()
  {
    console.log("Contador DataService: " + this.V_ContadorDataService);
    return this.V_ContadorDataService;
  }

  Pagar()
  {
    if (this.carritoCompra !=null)
    {
      this.V_ContadorDataService=0;
      this.carritoCompra = new carrito();
    }
    
  }


}
