import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogosComponent } from './catalogos/catalogos.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'catalogos', component: CatalogosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class L3RoutingModule { }
