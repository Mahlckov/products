import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'categories', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
