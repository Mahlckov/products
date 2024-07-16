import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  {path: "add-product", component : AddProductComponent},
  { path: "", redirectTo: "products", pathMatch: "full" }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
