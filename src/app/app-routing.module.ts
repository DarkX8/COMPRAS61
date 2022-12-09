import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './pages/productos/crear-producto/crear-producto.component';
import { ListarProductosComponent } from './pages/productos/listar-productos/listar-productos.component';

const routes: Routes = [
  {path:"products/list", component: ListarProductosComponent},
  {path:"products/create", component: CrearProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
