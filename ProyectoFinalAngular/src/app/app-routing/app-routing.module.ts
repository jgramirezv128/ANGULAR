import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'app/home/home.component';
import { CarritoComponent } from 'app/carrito/carrito.component';
import { LoginComponent } from 'app/login/login.component';
import { CatalogoComponent } from 'app/catalogo/catalogo.component';
import { DetalleProductoComponent } from 'app/detalle-producto/detalle-producto.component';


const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'', redirectTo:'/login', pathMatch:'full' },
  { path:'app-carrito', component: CarritoComponent},
  { path:'catalogo', component: CatalogoComponent},
  { path:'login', component: LoginComponent},
  { path:'detalle-producto/:id', component: DetalleProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:false})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
