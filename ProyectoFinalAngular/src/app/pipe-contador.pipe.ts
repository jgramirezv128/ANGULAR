import { Pipe, PipeTransform } from '@angular/core';
import { DataService } from './data.service';

@Pipe({
  name: 'pipeContador'
})
export class PipeContadorPipe implements PipeTransform {

  constructor(private dataService: DataService) 
  { 

  }

  transform(value: any): any {
    console.log("Pipe contador: " + this.dataService.ConsultarContador());
    return this.dataService.ConsultarContador();
  }

}
