import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsResolverService } from './products-resolver.service';
import { ProductResolverService } from './product-resolver.service';
import { ProductViewComponent } from './product-view/product-view.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { DeGuardService } from './de-guard.service';
import { RoleGuardService } from './role-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'all',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolverService
    },
    canActivateChild: [RoleGuardService],
    children: [
      {
        path: 'view/:prodId',
        component: ProductViewComponent,
        resolve: {
          product: ProductResolverService
        }
      },
      {
        path: 'edit/:prodId',
        component: ProductFormComponent,
        resolve: {
          product: ProductResolverService
        }
      },
    ]

  },
  {
    path: 'new',
    component: ProductFormComponent,
    canActivate: [AuthGuardService],
    canDeactivate: [DeGuardService]
  },
  { path: "login", component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
