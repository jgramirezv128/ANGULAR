import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';
import { usuarios } from './entidades/usuarios';
import { producto } from './entidades/producto';
import { carrito } from './entidades/carrito';
import { Observable,Subject} from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class DataService {

//Declaración de las variables
  private PathImagenes = './assets/imagenesBase/';
  private listausuarios: usuarios[] =[];
  listaproductos: producto[] =[];
  private carritoCompra: carrito;
  V_ContadorDataService: number;
  V_Logueado:boolean;
  
//Constructor del servicio
  constructor(private httpService:HttpService) 
  { 
    this.carritoCompra = new carrito();
    this.V_ContadorDataService = 0;
    this.V_Logueado = false;
    this.getUsuarios();
    this.getProductos();
  }


//Metódos y funciones

  /**
   * //Método que obtiene todos los usuarios en la base de datos Firebase
   * @returns retorna listausuarios
   * @memberof DataService
   */
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

  /**
   *Método que valida si el usuario es un usuario válido
  * @param {string} pUser
  * @param {string} pPassword
  * @returns retorna un boolean
  * @memberof DataService
  */
  getUsuarioValido(pUser:string, pPassword:string)
  {
    for(let key in this.listausuarios)
    {
        if (pUser==this.listausuarios[key].usuario && pPassword==this.listausuarios[key].password)
      {
          this.V_Logueado = true;
          return this.V_Logueado;
      }
    }
    return false;
  }

  /**
   *Método que obtiene todos los productos en la base de datos Firebase
   * @returns lista de productos
   * @memberof DataService
   */
  getProductos()
  {
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
              V_producto.IDProducto=key;
              V_producto.Nombre = data[key].Nombre;
              V_producto.Precio = data[key].Precio;
              V_producto.Stock = data[key].Stock;
              V_producto.cantidad = 0;
              V_producto.subtotal = 0;
              V_producto.imagen = data[key].imagen;
              if (environment.production) 
              {
                V_producto.imagen = V_producto.imagen.replace("..",".")  //Se modifica la ruta relativa en modo producción.
              }
              
              aux.push(V_producto);
            }
          }
          this.listaproductos = aux;
        }
    )
    return this.listaproductos;

  }

 
  /**
   *Método para agregar un producto al carrito de compra.
   * @param {producto} Item
   * @returns cantidad de productos en el carrito de compra
   * @memberof DataService
   */
  Agregar(Item:producto)
  {
    var resultado = this.carritoCompra.Productos.findIndex(x=> x.Nombre == Item.Nombre)
    if (resultado== -1) 
    {
      Item.subtotal = Item.Precio * Item.cantidad;
      Item.Stock = Item.Stock - Item.cantidad;
      this.carritoCompra.Productos.push(Item);
      this.V_ContadorDataService = this.V_ContadorDataService +1;
      
    }else
    {
      this.carritoCompra.Productos.splice(resultado,1,Item)
    }

    this.carritoCompra.Total = this.carritoCompra.CalcularTotal();
    return this.ConsultarContador();
  }


  /**
   * Método que modifica un producto en el carrito de compra  y actualiza en la base de datos Firebase
   * @param {producto} Item
   * @returns resultado de la ejecución (True/False)
   * @memberof DataService
   */
  Modificar(Item:producto)
  {
    //Item.imagen = Item.imagen.replace(this.PathImagenes,'');

     this.httpService.ActualizarProductos(Item)
     .subscribe(
       (data: Response) =>
         {
            return true;
         }
     ) 
     return false;
  }


  /**
   * Método que consulta el carrito de compras
   * @returns Entidad Carrito
   * @memberof DataService
   */
  getCarrito()
  {
    return this.carritoCompra;
  }


  /**
   * Método que realiza el pago de los productos del carrito de compra
   * Modifica los datos y limpa el carrito de compra
   * @param {carrito} V_Carrito
   * @memberof DataService
   */
  Pagar(V_Carrito: carrito)
  {
    this.carritoCompra = V_Carrito;
    if (this.carritoCompra !=null)
    {
      this.carritoCompra.Productos.forEach(item => 
      { 
          this.Modificar(item); 
      });
      this.V_ContadorDataService=0;
      this.carritoCompra = new carrito();
    }
    this.getProductos();
  }

  //Funciones generales

  /**
   * Método que consulta el fondo según la condición de logueo del usuario en sesión.
   *
   * @returns URL del fondo de la página.
   * @memberof DataService
   */
  CambiarFondo()
  {
      if (this.V_Logueado) 
      {
          return this.PathImagenes + 'main-fondo.jpg'; 
      } else 
      {
        return this.PathImagenes + 'login-fondo.jpg'; 
      }
  }
 
  /**
   *Método que consulta la cantidad de productos
   * @returns cantidad de productos nuevos
   * @memberof DataService
   */
  ConsultarContador()
  {
    return this.V_ContadorDataService;
  }

}
