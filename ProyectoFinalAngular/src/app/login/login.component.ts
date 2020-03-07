import { Component} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    private MostrarError= false;
    correo ="";
    password="";
    constructor(private dataService: DataService){}

    onSubmit()
    {
      this.MostrarError =false;
      console.log("Antes: "+ this.MostrarError.toString());
        this.MostrarError = !this.dataService.getUsuarioValido(this.correo,this.password);
        console.log("Mostrar Error: "+ this.MostrarError.toString());
        //this.MostrarError = !this.MostrarError;
    }

}
