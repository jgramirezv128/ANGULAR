import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { producto } from '../entidades/producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit 
{

  //Declaración de variables
  V_listaproductos: producto[];
  V_producto_seleccionado: producto;
  private sub: any;
  idParam: string = "";

  //Construcctor
  constructor(private dataService: DataService,private route: ActivatedRoute) 
  { 
    this.V_listaproductos=  this.dataService.getProductos();
  }


  ngOnInit() 
  {
    this.sub = this.route.params.subscribe(params => 
      {
          this.idParam = params['id'];
          this.V_listaproductos.forEach(x => 
            {
                if (x.Nombre.toLowerCase().indexOf(this.idParam.toLowerCase())>-1) 
                {
                  return this.V_producto_seleccionado = x;  
                }  
            });     
      });
  }
  

}
