import { Component, Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})

export class BarraSuperiorComponent {

  V_contadorBarraSuperior : number;

  constructor(private dataService: DataService) 
  { 
    this.V_contadorBarraSuperior = this.dataService.ConsultarContador();
    console.log("Nuevo contador: " + this.V_contadorBarraSuperior);
  }


}
