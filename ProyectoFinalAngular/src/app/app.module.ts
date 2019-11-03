import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { CatalogosDetalleComponent } from './catalogos-detalle/catalogos-detalle.component';
import { HttpService } from './http.service';

import { L3RoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogosComponent,
    CarritoComponent,
    BarraSuperiorComponent,
    CatalogosDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    L3RoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
